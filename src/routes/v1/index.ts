import { Router } from "express";

import walletRouter from "@/routes/v1/wallet";

const router: Router = Router();

router.use("/wallet", walletRouter);

export default router;
