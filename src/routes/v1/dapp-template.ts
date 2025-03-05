import { Router } from "express";
import { dappTemplateController } from "../../controllers/index.js";

const router: Router = Router();

router.post("/", dappTemplateController.getTemplate);

export default router;

