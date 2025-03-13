import { UserModel } from "../../../db/user.db";
import { User } from "../../model/user";
import { UserService } from "../userService";
import bcrypt from "bcrypt";

/**
 * Mock the database functions.
 */
jest.mock("../../../db/user.db", () => ({
  UserModel: {
    findOne: jest.fn(),
    create: jest.fn(),
  },
}));

jest.mock("bcrypt", () => ({
  hash: jest.fn(async () => "hashedPassword"), 
  compare: jest.fn(
    async (input, hashed) => input === "12345678" && hashed === "hashedPassword"
  ), 
}));

const existingUser = { username: "Luqas", password: "12345678" };

describe("UserService", () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
    jest.clearAllMocks();
  });

  test("should register a new user", async () => {
    const newUser: User = { username: "Luqas", password: "12345678" };

    (UserModel.findOne as jest.Mock).mockResolvedValue(null);
  
    (UserModel.create as jest.Mock).mockResolvedValue({
      username: newUser.username,
      password: "hashedPassword",
    });
  
    await userService.registerUser(newUser.username, newUser.password);
  
    expect(UserModel.create).toHaveBeenCalledWith({
      username: "Luqas",
      password: "hashedPassword",
    });
  
    (UserModel.findOne as jest.Mock).mockResolvedValue({
      username: newUser.username,
      password: "hashedPassword",
    });
  
    const foundUser = await userService.findUser(newUser.username, "12345678");
  
    expect(foundUser).toBeDefined();
    expect(foundUser?.username).toBe(newUser.username);
    expect(foundUser?.password).toBe("hashedPassword");
  });

  test("should find an existing user with correct credentials", async () => {
    const existingUser = { username: "Luqas", password: "12345678" };

    (UserModel.findOne as jest.Mock).mockResolvedValue({
      username: existingUser.username,
      password: "hashedPassword",
    });

    const foundUser = await userService.findUser(
      existingUser.username,
      existingUser.password
    );

    expect(UserModel.findOne).toHaveBeenCalledWith({
      where: { username: existingUser.username },
    });
    expect(bcrypt.compare).toHaveBeenCalledWith(
      existingUser.password,
      "hashedPassword"
    );
    expect(foundUser).toBeDefined();
    expect(foundUser?.username).toBe(existingUser.username);
  });

  test("should return undefined for incorrect password", async () => {
    (UserModel.findOne as jest.Mock).mockResolvedValue(undefined);

    const foundUser = await userService.findUser("Luqas", "wrongPassword");
    expect(foundUser).toBeUndefined();
  });

  test("should return undefined for non-existent user", async () => {
    (UserModel.findOne as jest.Mock).mockResolvedValue(undefined);
    const foundUser = await userService.findUser("NonExistent", "somePassword");
    expect(foundUser).toBeUndefined();
  });
});
