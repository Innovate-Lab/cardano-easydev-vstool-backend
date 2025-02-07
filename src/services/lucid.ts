import { Datum, UTxO } from "lucid-cardano";

interface ILucidService {
    connectWalletWithPrivateKey: (privateKey: string) => Promise<void>;
    connectWalletWithSeedPhrase: (seedPhrase: string) => Promise<void>;
    getUTxOs: (address: string) => Promise<UTxO[]>;
    getDatum: (datumHash: string) => Promise<Datum>;
    generatePrivateKey: () => Promise<string>;
    generateSeedPhrase: () => Promise<string>;
}

class LucidService implements ILucidService {
    private initLucid = async () => {
        try {
            const { Lucid, Maestro } = await (eval('import("lucid-cardano")') as Promise<any>);

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
            lucid.selectWalletFromSeedPhrase(seedPhrase);
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
}

export const lucidService = new LucidService();