import { Router } from "express";
import { processVision } from "../controllers/vision.controller";

const router = Router();

router.post("/calculate", processVision);

export default router;
