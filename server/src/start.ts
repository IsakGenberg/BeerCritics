import express from 'express';
import { beerRouter } from './router/beer';

export const app = express();

app.use(express.json());
app.use("/beer", beerRouter);
