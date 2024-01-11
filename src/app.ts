import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";

const app = express();

// middlewares
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(helmet());

export default app;
