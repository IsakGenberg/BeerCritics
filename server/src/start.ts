import express from 'express';
import { beerRouter } from './router/beer';
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());
app.use("/beer", beerRouter);
