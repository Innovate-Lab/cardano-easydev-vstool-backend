import "module-alias/register";
import { createServer } from "node:http";

import app from "@/app";
import { config } from "@/config";
import { cronJobService } from "@/jobs/cronjob";
// import { redis } from "@/db/redis_connection";

const port = config?.server?.httpPort || 3000;

const server = createServer(app);

server.listen(port, () => {
  console.log(`[server]: Server is running with port ${port}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    cronJobService.stop();
    // redis.disconnect();
    console.log("[server]: Server is closed");
  });
});
