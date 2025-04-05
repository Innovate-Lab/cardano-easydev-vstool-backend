import { Datum, UTxO, Lucid, Maestro, Data, fromText } from "lucid-cardano";
import { SchemaField } from "../types/api/lucid";
import { AppError } from "../pkg/e/app_error.js";
import { ErrorCode } from "../pkg/e/code.js";

interface ILucidService {
    connectWalletWithPrivateKey: (privateKey: string) => Promise<string>;
    connectWalletWithSeedPhrase: (seedPhrase: string) => Promise<string>;
    getUTxOs: (address: string) => Promise<UTxO[]>;
    getDatum: (datumHash: string) => Promise<Datum>;
    generatePrivateKey: () => Promise<string>;
    generateSeedPhrase: () => Promise<string>;
}

class LucidService implements ILucidService {
    initLucid = async () => {
        try {
            const lucid = await Lucid.new(
                new Maestro({
                    network: "Preprod",
                    apiKey: "nw9fCIBMwlm6tWCDMBfcGwleKsC8i4LG",
                    turboSubmit: false
                }),
                "Preprod",
            );

            return lucid;
        } catch (error) {
            throw AppError.newError500(ErrorCode.LUCID_ERROR, "lucid error: " + (error as Error).message);
        }
    }


    connectWalletWithPrivateKey = async (privateKey: string) => {
        try {
            const lucid = await this.initLucid();
            lucid.selectWalletFromPrivateKey(privateKey);
            const address = await lucid.wallet.address();
            return address;
        } catch (error) {
            throw AppError.newError500(ErrorCode.CONNECT_WALLET_WITH_PRIVATE_KEY_ERROR, "connect wallet with private key error: " + (error as Error).message);
        }
    }

    connectWalletWithSeedPhrase = async (seedPhrase: string) => {
        try {
            const lucid = await this.initLucid();
            lucid.selectWalletFromSeed(seedPhrase);
            const address = await lucid.wallet.address();
            return address;
        } catch (error) {
            throw AppError.newError500(ErrorCode.CONNECT_WALLET_WITH_SEED_PHRASE_ERROR, "connect wallet with seed phrase error: " + (error as Error).message);
        }
    }

    getUTxOs = async (address: string) => {
        try {
            const lucid = await this.initLucid();
            const utxos = await lucid.utxosAt(address);
            return utxos;
        } catch (error) {
            throw AppError.newError500(ErrorCode.FETCH_UTXOS_ERROR, "fetch utxos error: " + (error as Error).message);
        }
    }

    getDatum = async (datumHash: string) => {
        try {
            const lucid = await this.initLucid();
            return await lucid.provider.getDatum(datumHash);
        } catch (error) {
            throw error;
        }
    }

    generatePrivateKey = async () => {
        try {
            const lucid = await this.initLucid();
            return lucid.utils.generatePrivateKey();
        } catch (error) {
            throw AppError.newError500(ErrorCode.GENERATE_PRIVATE_KEY_ERROR, "generate private key error: " + (error as Error).message);
        }
    }

    generateSeedPhrase = async () => {
        try {
            const lucid = await this.initLucid();
            return lucid.utils.generateSeedPhrase();
        } catch (error) {
            throw AppError.newError500(ErrorCode.GENERATE_SEED_PHRASE_ERROR, "generate seed phrase error: " + (error as Error).message);
        }
    }

    generateSchemaObj = (fields: SchemaField[]) => {
        const schemaObj: { [key: string]: any } = {};

        fields.forEach(field => {
            switch (field.dataType) {
                case 'bytes':
                    schemaObj[field.title] = Data.Bytes();
                    break;
                case 'integer':
                    schemaObj[field.title] = Data.Integer();
                    break;
                default:
                    schemaObj[field.title] = Data.Bytes(); // fallback to Bytes
            }
        });

        return Data.Object(schemaObj);
    };

    getPubKeyHash = async (address: string) => {
        try {
            const lucid = await this.initLucid();
            return await lucid.utils.getAddressDetails(address).paymentCredential?.hash;
        } catch (error) {
            throw AppError.newError500(ErrorCode.GET_PUB_KEY_HASH_ERROR, "get pub key hash error: " + (error as Error).message);
        }
    }

    executeTransaction = async (data: any, contractAddress: string, unitsQuantity: any, seedPhrase: string, isLock: boolean, validator: any) => {
        try {
            const datumOrRedeemerObject = data.reduce((acc: any, field: any) => {
                if (field.dataType === 'integer') {
                    acc[field.title] = BigInt(field.value) * BigInt(1000000);
                } else {
                    acc[field.title] = fromText(field.value);
                }
                return acc;
            }, {});

            // Use dynamic schema
            const correctData = Data.to(
                datumOrRedeemerObject,
                lucidService.generateSchemaObj(data)
            );

            const lucid = await this.initLucid();
            lucid.selectWalletFromSeed(seedPhrase);

            let tx;
            if (isLock) {
                tx = await lucid?.newTx()
                .payToContract(
                    contractAddress,
                    { inline: correctData },
                    unitsQuantity
                ).complete();
            } else {
                const address = await lucid.wallet.address();
                const utxos = await lucid?.utxosAt(contractAddress);
                tx = await lucid?.newTx().collectFrom([utxos[0]], correctData).attachSpendingValidator(validator).addSigner(address).complete();
            }

            const signedTx = await tx.sign().complete();
            const hash = await signedTx.submit();

            return hash;
        } catch (error) {
            throw AppError.newError500(ErrorCode.EXECUTE_TRANSACTION_ERROR, "execute transaction error: " + (error as Error).message);
        }
    };
}

export const lucidService = new LucidService();