import { UserService } from "../service/userService";
import express, { Request, Response } from "express";

export const userRouter = express.Router();
const userService = new UserService();



userRouter.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body; 
      const user = await userService.registerUser(username, password);
      res.status(201).send(`Registered user ${username}`);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);
