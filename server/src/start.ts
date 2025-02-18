import dotenv from "dotenv";
import express from "express";
import { beerRouter } from "./router/beer";
import cors from "cors";
import session from "express-session";

export const app = express();
dotenv.config();
app.use(express.json());

if (!process.env.SESSION_SECRET) {
  console.log("Could not find SESSION_SECRET in .env file");
  process.exit();
}
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use("/beer", beerRouter);
