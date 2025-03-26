import { Router } from "express";

import { SmartContractService } from "../../services/smartContract.js";
import { lucidService } from "../../services/lucid.js";
import { CustomExpress } from "../../pkg/app/response.js";

const router: Router = Router();

router.post("/address", async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);
    const { compiledCode } = req.body;

    const lucid = await lucidService.initLucid();
    const smartContractService = new SmartContractService(lucid, compiledCode);

    const contractAddress = smartContractService.getContractAddress();
    appExpress.response201({ contractAddress });
});

router.post("/execute", async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);

    const { datumOrRedeemer } = req.body;

    const txHash = await lucidService.executeTransaction(datumOrRedeemer);

    appExpress.response201({ txHash });
});

export default router;
