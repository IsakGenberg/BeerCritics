import { UserService } from "../service/userService";
import express, { Request, Response } from "express";
import { User } from "../model/user";
import { IUserService } from "../serviceInterfaces/IUserService";

export const userRouter = express.Router();
const userService: IUserService = new UserService();

interface UserRequest extends Request {
  body: { username: string; password: string };
  session: any;
}

interface ChangeUsernameRequest{
  body: {
    oldUsername: string;
    newUsername: string;
  };
  session: any;
}

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

userRouter.get("/", async (req: UserRequest, res: Response) => {
  if (!req.session.username) {
    res.status(401).send(null);
    return;
  } else {
    res.status(200).send(req.session.username);
  }
});

userRouter.post("/logout", async (req: UserRequest, res: Response) => {
  try {
    delete req.session.username;
    res.status(200).send("Logged out user");
  } catch {
    res.status(500).send("Couldn't logout user");
  }
});

userRouter.patch("/", async (req:  ChangeUsernameRequest, res: Response) => {
  try {
    const { oldUsername, newUsername } = req.body;
    
    if (!req.session.username) {
      res.status(401).send("Can't update username, user not logged in");
      return;
    }

    await userService.changeUsername(oldUsername,newUsername);

    req.session.username = newUsername;
    res.status(200).send(newUsername);
  } catch (e: any) {
    console.error("Error occurred during username change:", e);
    if (e.message === "User already exists") {
      res.status(409).send("Can't change username, username already exists");
    } else {
      res.status(500).send("Internal server error");
    }
  }
});