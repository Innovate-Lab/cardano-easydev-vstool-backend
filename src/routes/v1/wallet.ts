import { Router } from "express";
import { lucidService } from "@/services/lucid";
import { CustomExpress } from "@/pkg/app/response";

const router: Router = Router();

router.post("/private-key", async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);

    const privateKey = await lucidService.generatePrivateKey();

    appExpress.response201({
        privateKey
    });
})

router.post("/seed-phrase", async (req, res, next) => {
    const appExpress = new CustomExpress(req, res, next);

    const seedPhrase = await lucidService.generateSeedPhrase();

    appExpress.response201({
        seedPhrase
    });
})

export default router;

