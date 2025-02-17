import "dotenv/config";
import express from "express";
import { v2 } from "./routes";

const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date(),
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage()
  });
});
app.use(v2);

export default app;
