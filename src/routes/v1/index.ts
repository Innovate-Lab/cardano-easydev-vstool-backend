import { Router } from "express";

import walletRouter from "./wallet.js";

const router: Router = Router();

router.use("/wallet", walletRouter);

export default router;
