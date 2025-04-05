import { Router } from "express";

import { validatorController } from "../../controllers/index.js";

const router: Router = Router();

router.post("/address", validatorController.getContractAddress);

router.post("/execute", validatorController.executeTransaction);

export default router;
