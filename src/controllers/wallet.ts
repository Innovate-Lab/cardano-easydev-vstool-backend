import { RequestHandler } from "express";

import { CustomExpress } from "@/pkg/app/response";
import { lucidService } from "@/services/lucid";

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

const walletController = {
    generatePrivateKey,
    generateSeedPhrase,
};

export { walletController };
