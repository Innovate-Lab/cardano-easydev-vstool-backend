import { RequestHandler } from "express";

import { CustomExpress } from "../pkg/app/response.js";
import { lucidService } from "../services/lucid.js";

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

const walletController = {
    generatePrivateKey,
    generateSeedPhrase,
    connectWalletWithPrivateKey,
    connectWalletWithSeedPhrase,
};

export { walletController };
