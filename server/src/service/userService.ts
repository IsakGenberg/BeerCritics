import { User } from "../model/user";
import { IUserService } from "../serviceInterfaces/IUserService";
import { UserModel } from "../../db/user.db";
import bcrypt from "bcrypt";
import { where } from "sequelize";

export class UserService implements IUserService {
  async registerUser(username: string, password: string) {
    const existingUser = await UserModel.findOne({ where: { username } });
    if (existingUser) {
      console.log("User exists");
      throw new Error("User already exists");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await UserModel.create({
      username: username,
      password: hashedPassword,
    });
  }

  async findUser(
    username: string,
    password: string
  ): Promise<User | undefined> {
    const user = await UserModel.findOne({ where: { username } });

    if (!user) return undefined;

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return undefined;

    return user;
  }

  async changeUsername(oldUsername: string, newUsername: string) {
    const existingUser =await UserModel.findOne({ where: { username : newUsername } });
    if (existingUser) {
      console.log("Username exists");
      throw new Error("User already exists");
    }
    try {
      await UserModel.update(
        { username: newUsername },
        { where: { username: oldUsername } }
      );
    } catch (e: any) {
      console.log("Database error " + e.message);
    }
  }
}
