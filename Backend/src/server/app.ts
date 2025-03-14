import express from "express";
import cors from "cors";
import {CarRouter} from "../routes";
import {DiagnosisRouter} from "../routes";
import {errorHandler} from "../middleware";

export const app = express();

app.use(errorHandler);
app.use(cors());
app.use(express.json());


app.use("/api/v1/car", CarRouter);
app.use("/api/v1/diagnosis", DiagnosisRouter);
