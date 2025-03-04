import { createServer } from "node:http";

import app from "./app.js";
import { config } from "./config/index.js";

const port = config?.server?.httpPort || 3000;

const server = createServer(app);

server.listen(port, () => {
  console.log(`[server]: Server is running with port ${port}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("[server]: Server is closed");
  });
});
