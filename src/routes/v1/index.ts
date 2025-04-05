import { Router } from "express";

import walletRouter from "./wallet.js";
import dappTemplateRouter from "./dapp-template.js";
import validatorRouter from "./validator.js";

const router: Router = Router();

router.use("/wallet", walletRouter);
router.use("/dapp-template", dappTemplateRouter);
router.use("/validator", validatorRouter);

export default router;
