import { RequestHandler } from "express";

import { CustomExpress } from "../pkg/app/response.js";
import { AppError } from "../pkg/e/app_error.js";
import { ErrorCode } from "../pkg/e/code.js";
import { SmartContractService } from "../services/smartContract.js";
import { lucidService } from "../services/lucid.js";

const getContractAddress: RequestHandler = async (req, res, next) => {
    try {
        const appExpress = new CustomExpress(req, res, next);
        const { compiledCode } = req.body;

        const lucid = await lucidService.initLucid();
        const smartContractService = new SmartContractService(lucid, compiledCode);

        const contractAddress = smartContractService.getContractAddress();
        appExpress.response201({ contractAddress });
    } catch (error) {
        throw AppError.newError500(ErrorCode.GET_CONTRACT_ADDRESS_ERROR, "get contract address error: " + (error as Error).message);
    }
};

const executeTransaction: RequestHandler = async (req, res, next) => {
    try {
        const appExpress = new CustomExpress(req, res, next);

        const { datumOrRedeemer, contractAddress, seedPhrase, isLock, validator } = req.body;

        let unitsQuantity;
        if (isLock) {
            unitsQuantity = {
                lovelace: BigInt(req.body.unitsQuantity.lovelace)
            };
        }

        const txHash = await lucidService.executeTransaction(datumOrRedeemer, contractAddress, unitsQuantity, seedPhrase, isLock, validator);

        appExpress.response201({ txHash });
    } catch (error) {
        throw AppError.newError500(ErrorCode.EXECUTE_TRANSACTION_ERROR, "execute transaction error: " + (error as Error).message);
    }
};

const validatorController = {
    getContractAddress,
    executeTransaction,
};

export { validatorController };
