import { UserService } from "../userService";
import { User } from "../../model/user";

describe("UserService", () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  test("should register a new user", async () => {
    const newUser: User = { username: "NewUser", password: "securePass" };
    await userService.registerUser(newUser.username, newUser.password);

    const foundUser = await userService.findUser(
      newUser.username,
      newUser.password
    );
    expect(foundUser).toBeDefined();
    expect(foundUser?.username).toBe(newUser.username);
    expect(foundUser?.password).toBe(newUser.password);
  });

  test("should find an existing user with correct credentials", async () => {
    const existingUser = { username: "Luqas", password: "12345678" };
    const foundUser = await userService.findUser(
      existingUser.username,
      existingUser.password
    );

    expect(foundUser).toBeDefined();
    expect(foundUser?.username).toBe(existingUser.username);
  });

  test("should return undefined for incorrect password", async () => {
    const foundUser = await userService.findUser("Luqas", "wrongPassword");
    expect(foundUser).toBeUndefined();
  });

  test("should return undefined for non-existent user", async () => {
    const foundUser = await userService.findUser("NonExistent", "somePassword");
    expect(foundUser).toBeUndefined();
  });

  test("changes username correctly", async () =>{
    const existingUser = { username: "Luqas", password: "12345678" };

    await userService.changeUsername(existingUser.username, "newUsername");

    const foundUser = await userService.findUser("newUsername", "12345678");

    expect(foundUser?.username).toBe("newUsername");

  });
});
