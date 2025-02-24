import { User } from "../model/user";

export class UserService {
  users: User[] = [
    { username: "Luqas", password: "12345678" },
    { username: "Hannah", password: "12345678" },
    { username: "Irre", password: "12345678" },
    { username: "Pimme", password: "12345678" },
  ];
  async registerUser(username: string, password: string) {
    this.users.push({ username: username, password: password });
  }

  async findUser(
    username: string,
    password?: string
  ): Promise<User | undefined> {
    if (!password) {
      return this.users.find((user) => user.username === username);
    }
    return this.users.find(
      (user) => user.username === username && user.password === password
    );
  }
}
