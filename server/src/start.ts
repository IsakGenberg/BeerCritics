import dotenv from "dotenv";
import express from "express";
import { beerRouter } from "./router/beer";
import cors from "cors";
import session from "express-session";
import { userRouter } from "./router/user";
import { reviewRouter } from "./router/review";

export const app = express();
app.use(express.json());
dotenv.config();

if (!process.env.SESSION_SECRET) {
  console.log("Could not find SESSION_SECRET in .env file");
  process.exit();
}
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use("/beer", beerRouter);
app.use("/user", userRouter);
app.use("/review", reviewRouter);
