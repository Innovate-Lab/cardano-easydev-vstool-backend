import { Router } from "express";
import { walletController } from "@/controllers";

const router: Router = Router();

router.post("/private-key", walletController.generatePrivateKey);

router.post("/seed-phrase", walletController.generateSeedPhrase);

export default router;

