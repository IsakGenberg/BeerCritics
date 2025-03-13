import { UserService } from "../service/userService";
import express, { Request, Response } from "express";
import { User } from "../model/user";
import { IUserService } from "../serviceInterfaces/IUserService";

/**
 * Router for get and post user endpoints
 */
export const userRouter = express.Router();
const userService: IUserService = new UserService();

interface UserRequest extends Request {
  body: { username: string; password: string };
  session: any;
}

/**
 * Register a user in the database
 */
userRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    await userService.registerUser(username, password);
    res.status(201).send(`Registered user`);
  } catch (e: any) {
    console.log("sending error");
    res.status(409).send("User already exists");
  }
});

/**
 * Login a user
 */
userRouter.post("/login", async (req: UserRequest, res: Response) => {
  const user: User | undefined = await userService.findUser(
    req.body.username,
    req.body.password
  );
  if (!user) {
    res.status(401).send("No such username or password");
    return;
  }
  req.session.username = req.body.username;
  res.status(200).send("Logged in");
});

/**
 * Get the current user in the session
 */
userRouter.get("/", async (req: UserRequest, res: Response) => {
  if (!req.session.username) {
    res.status(401).send(null);
    return;
  } else {
    res.status(200).send(req.session.username);
  }
});

/**
 * Logout a user
 */
userRouter.post("/logout", async (req: UserRequest, res: Response) => {
  try {
    delete req.session.username;
    res.status(200).send("Logged out user");
  } catch {
    res.status(500).send("Couldn't logout user");
  }
});
