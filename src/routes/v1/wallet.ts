import { Router } from "express";
import { walletController } from "../../controllers/index.js";

const router: Router = Router();

router.post("/private-key", walletController.generatePrivateKey);

router.post("/seed-phrase", walletController.generateSeedPhrase);

router.post("/connect-private-key", walletController.connectWalletWithPrivateKey)

router.post("/connect-seed-phrase", walletController.connectWalletWithSeedPhrase)

export default router;

