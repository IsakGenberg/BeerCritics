import { User } from "../model/user";

export interface IUserService {
  registerUser(username: string, password: string): Promise<void>;

  findUser(username: string, password?: string): Promise<User | undefined>;
}
