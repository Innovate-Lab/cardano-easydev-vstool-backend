import { RequestHandler } from "express";

import { CustomExpress } from "../pkg/app/response.js";
import { lucidService } from "../services/lucid.js";
import { blockforstService } from "../services/blockforst.js";

const generatePrivateKey: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);

    const privateKey = await lucidService.generatePrivateKey();

    appExpress.response201({
        privateKey
    });
};

const generateSeedPhrase: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);

    const seedPhrase = await lucidService.generateSeedPhrase();

    appExpress.response201({
        seedPhrase
    });
};

const connectWalletWithPrivateKey: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);

    const { privateKey } = req.body;

    const address = await lucidService.connectWalletWithPrivateKey(privateKey);

    appExpress.response201({
        address
    });
};

const connectWalletWithSeedPhrase: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);

    const { seedPhrase } = req.body;

    const address = await lucidService.connectWalletWithSeedPhrase(seedPhrase);

    appExpress.response201({
        address
    });
};

const getUtxosByAddress: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);

    const { address } = req.query as { address: string };

    const utxos = await blockforstService.getUtxosByAddress(address);

    appExpress.response201({
        utxos
    });
};

const getNFTsByAddress: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);

    const { address } = req.query as { address: string };

    const nfts = await blockforstService.getNFTs(address);

    appExpress.response201({
        nfts
    });
};

const getTransactionsByAddress: RequestHandler = async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);

    const { address } = req.query as { address: string };

    const transactions = await blockforstService.getTransactions(address);

    appExpress.response201({
        transactions
    });
};

const walletController = {
    generatePrivateKey,
    generateSeedPhrase,
    connectWalletWithPrivateKey,
    connectWalletWithSeedPhrase,
    getUtxosByAddress,
    getNFTsByAddress,
    getTransactionsByAddress
};

export { walletController };
