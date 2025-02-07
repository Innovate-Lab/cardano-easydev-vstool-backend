import { Router } from "express";

import healthRouter from "@/routes/health";
import v1Router from "@/routes/v1";

const router: Router = Router();

router.use("/api/v1", v1Router);

// Health check
router.get("/health", healthRouter);

export default router;
