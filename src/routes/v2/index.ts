import { Router } from "express";
import customerRouter from "./customer";

const router = Router();
router.use("/v2/customer", customerRouter);

export default router;
