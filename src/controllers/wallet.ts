import { RequestHandler } from "express";

import { CustomExpress } from "../pkg/app/response.js";
import { lucidService } from "../services/lucid.js";
import { blockforstService } from "../services/blockforst.js";

const generatePrivateKey: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);
    try {
        const privateKey = await lucidService.generatePrivateKey();

        appExpress.response201({
            privateKey
        });
    } catch (error) {
        next(error);
    }
};

const generateSeedPhrase: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);
    try {
        const seedPhrase = await lucidService.generateSeedPhrase();

        appExpress.response201({
            seedPhrase
        });
    } catch (error) {
        next(error);
    }
};

const connectWalletWithPrivateKey: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);
    try {
        const { privateKey } = req.body;

        const address = await lucidService.connectWalletWithPrivateKey(privateKey);

        appExpress.response201({
            address
        });
    } catch (error) {
        next(error);
    }
};

const connectWalletWithSeedPhrase: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);
    try {
        const { seedPhrase } = req.body;

        const address = await lucidService.connectWalletWithSeedPhrase(seedPhrase);

        appExpress.response201({
            address
        });
    } catch (error) {
        next(error);
    }
};

const getUtxosByAddress: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);
    try {
        const { address } = req.query as { address: string };

        const utxos = await blockforstService.getUtxosByAddress(address);

        appExpress.response201({
            utxos
        });
    } catch (error) {
        next(error);
    }
};

const getNFTsByAddress: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);
    try {
        const { address } = req.query as { address: string };

        const nfts = await blockforstService.getNFTs(address);

        appExpress.response201({
            nfts
        });
    } catch (error) {
        next(error);
    }
};

const getTransactionsByAddress: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);
    try {
        const { address } = req.query as { address: string };

        const transactions = await blockforstService.getTransactions(address);

        appExpress.response201({
            transactions
        });
    } catch (error) {
        next(error);
    }
};

const getUtxosUsingLucid: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);
    try {
        const { address } = req.query as { address: string };

        const utxos = await lucidService.getUTxOs(address);

        const utxosString = JSON.stringify(utxos, (key, value) =>
            typeof value === "bigint" ? Number(value) : value,
        );

        appExpress.response201({
            utxos: JSON.parse(utxosString)
        });
    } catch (error) {
        next(error);
    }
};

const getPubKeyHash: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);
    try {
        const { address } = req.query as { address: string };

        const pubKeyHash = await lucidService.getPubKeyHash(address);

        appExpress.response201({ pubKeyHash });
    } catch (error) {
        next(error);
    }
};

const walletController = {
    generatePrivateKey,
    generateSeedPhrase,
    connectWalletWithPrivateKey,
    connectWalletWithSeedPhrase,
    getUtxosByAddress,
    getNFTsByAddress,
    getTransactionsByAddress,
    getUtxosUsingLucid,
    getPubKeyHash
};

export { walletController };
