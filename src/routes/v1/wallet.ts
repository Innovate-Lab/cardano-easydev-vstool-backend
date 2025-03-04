import { Router } from "express";
import { walletController } from "../../controllers/index.js";

const router: Router = Router();

router.post("/private-key", walletController.generatePrivateKey);

router.post("/seed-phrase", walletController.generateSeedPhrase);

// router.post("/connect-private-key", async (req, res, next) => {
//     const appExpress = new CustomExpress(req, res, next);

//     const { privateKey } = req.body;

//     const address = await lucidService.connectWalletWithPrivateKey(privateKey);

//     appExpress.response201({
//         address
//     });
// })

// router.post("/connect-seed-phrase", async (req, res, next) => {
//     const appExpress = new CustomExpress(req, res, next);

//     const { seedPhrase } = req.body;

//     const address = await lucidService.connectWalletWithSeedPhrase(seedPhrase);

//     appExpress.response201({
//         address
//     });
// })

export default router;

