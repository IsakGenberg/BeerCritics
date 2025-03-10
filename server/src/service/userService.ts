import { User } from "../model/user";
import { IUserService } from "../serviceInterfaces/IUserService";
import { UserModel } from "../../db/user.db";

export class UserService implements IUserService {
  async registerUser(username: string, password: string) {
    const existingUser = await UserModel.findOne({ where: { username } });
    if (existingUser) {
      console.log("User exists");
      throw new Error("User already exists");
    }

    await UserModel.create({
      username: username,
      password: password,
    });
  }

  async findUser(
    username: string,
    password: string
  ): Promise<User | undefined> {
    const user = await UserModel.findOne({ where: { username } });

    if (!user || user.password !== password) return undefined;

    return user;
  }
}
