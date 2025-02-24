import { UserService } from "../service/userService";
import express, { Request, Response } from "express";
import { User } from "../model/user";

export const userRouter = express.Router();
const userService = new UserService();

interface UserRequest extends Request {
  body: { username: string; password: string };
  session: any;
}

userRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    await userService.registerUser(username, password);
    res.status(201).send(`Registered user`);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

userRouter.post("/login", async (req: UserRequest, res: Response) => {
  const { username, password } = req.body;
  const user: User | undefined = await userService.findUser(username, password);
  if (!user) {
    res.status(401).send("No such username or password");
    return;
  }
  req.session.username = req.body.username;
  console.log(`Logged in ${username}`);
  res.status(200).send("Logged in");
});
