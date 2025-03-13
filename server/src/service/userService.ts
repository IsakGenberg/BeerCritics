import { User } from "../model/user";
import { IUserService } from "../serviceInterfaces/IUserService";
import { UserModel } from "../../db/user.db";
import bcrypt from "bcrypt";

/**
 * UserService is a class that represents a service for users.
 */
export class UserService implements IUserService {

  /**
   * Hashes the password and registers a user in the database
   * @param username username of the user to be registered
   * @param password password of the user to be registered
   */
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

  /**
   * Checks if a username and password match a user in the database
   * @param username username of the user to be found
   * @param password password of the user to be found
   * @returns user object if the user exists in the database, otherwise undefined
   */
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
}
