import { User } from "../model/user";
import { IUserService } from "../serviceInterfaces/IUserService";
import { UserModel } from "../../db/user.db";

export class UserService implements IUserService {
  async registerUser(username: string, password: string) {
    UserModel.create({
      username: username,
      password: password,
    });
  }

  async findUser(
    username: string,
    password?: string
  ): Promise<User | undefined> {
    const user = await UserModel.findOne({ where: { username } });

    if (!user) return undefined;

    if (!password) return user;

    if (user.password !== password) return undefined;

    return user;
  }
}
