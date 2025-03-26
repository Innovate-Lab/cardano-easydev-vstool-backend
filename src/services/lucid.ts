import { Datum, UTxO, Lucid, Maestro, Data, fromText } from "lucid-cardano";
import { SchemaField } from "../types/api/lucid";

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
            throw error;
        }
    }


    connectWalletWithPrivateKey = async (privateKey: string) => {
        try {
            const lucid = await this.initLucid();
            lucid.selectWalletFromPrivateKey(privateKey);
            const address = await lucid.wallet.address();
            return address;
        } catch (error) {
            throw error;
        }
    }

    connectWalletWithSeedPhrase = async (seedPhrase: string) => {
        try {
            const lucid = await this.initLucid();
            lucid.selectWalletFromSeed(seedPhrase);
            const address = await lucid.wallet.address();
            return address;
        } catch (error) {
            throw error;
        }
    }

    getUTxOs = async (address: string) => {
        try {
            const lucid = await this.initLucid();
            const utxos = await lucid.utxosAt(address);
            return utxos;
        } catch (error) {
            throw error;
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
            throw error;
        }
    }

    generateSeedPhrase = async () => {
        try {
            const lucid = await this.initLucid();
            return lucid.utils.generateSeedPhrase();
        } catch (error) {
            throw error;
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
            throw error;
        }
    }

    executeTransaction = async (data: any) => {
        try {
            const datumObject = data.reduce((acc: any, field: any) => {
                if (field.dataType === 'integer') {
                    acc[field.title] = BigInt(field.value) * BigInt(1000000);
                } else {
                    acc[field.title] = fromText(field.value);
                }
                return acc;
            }, {});

            // const ownerPubKeyHash = await lucid?.utils.getAddressDetails(address).paymentCredential?.hash;

            // Use dynamic schema
            const correctData = Data.to(
                datumObject,
                lucidService.generateSchemaObj(data)
            );

            // const correctData = Data.to(
            //   {
            //     owner: ownerPubKeyHash
            //   },
            //   generateDatumSchema(data)
            // );

            // const tx = await lucid?.newTx()
            //     .payToContract(
            //         contractAddress,
            //         { inline: correctData },
            //         unitsQuantity
            //     ).complete();

            // const signedTx = await tx.sign().complete();
            // const hash = await signedTx.submit();
            // console.log(hash);

            return correctData;
        } catch (error) {
            console.error('Transaction failed:', error);
        }
    };
}

export const lucidService = new LucidService();