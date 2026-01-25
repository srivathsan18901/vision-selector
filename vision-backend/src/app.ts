import express from "express";
import cors from "cors";
import visionRoutes from "./routes/vision.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/vision", visionRoutes);

export default app;
