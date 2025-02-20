import { UserService } from "../service/userService";
import express, { Request, Response } from "express";
import { User } from "../model/user";

export const userRouter = express.Router();
const userService = new UserService();




userRouter.post(
    "/",
    async (req: Request, res: Response) => {
      try {
        const { user } = req.body; 
        await userService.registerUser(user);
        res.status(201).send(`Registered user`);
      } catch (e: any) {
        res.status(500).send(e.message);
      }
    }
  );
  
