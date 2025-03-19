import { Router } from "express";

import healthRouter from "./health.js";
import v1Router from "./v1/index.js";

const router: Router = Router();

router.use("/api/v1", v1Router);

// Health check
router.use("/health", healthRouter);

export default router;
