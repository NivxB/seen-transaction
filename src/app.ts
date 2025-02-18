import express from "express";
import { v2 } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date(),
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage()
  });
});
app.use("/v2", v2);
app.use((_req, res) => {
  res.status(404).json({ code: "not_found" });
});

export default app;
