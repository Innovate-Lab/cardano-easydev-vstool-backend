import { Router } from "express";

import walletRouter from "./wallet.js";
import dappTemplateRouter from "./dapp-template.js";

const router: Router = Router();

router.use("/wallet", walletRouter);
router.use("/dapp-template", dappTemplateRouter);

export default router;
