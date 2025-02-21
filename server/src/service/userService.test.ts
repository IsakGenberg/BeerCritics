import { UserService } from "./userService";
import { User } from "../model/user";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

jest.mock("fs");

dotenv.config();

describe("UserService", () => {
  let userService: UserService;
  const mockUser: User = {
    username: "JohnDoe",
    password: "password123",
  };

  beforeEach(() => {
    userService = new UserService();
    process.env.USERS_JSON_PATH = "/mock/path/users.json";
  });

  it("should throw an error if USERS_JSON_PATH is not defined", async () => {
    delete process.env.USERS_JSON_PATH;

    await expect(userService.registerUser(mockUser)).rejects.toThrow(
      "USERS_JSON_PATH is not defined in the .env file"
    );
  });

  it("should register a user successfully and update users.json", async () => {
    const mockReadFileSync = jest
      .spyOn(fs, "readFileSync")
      .mockReturnValue(JSON.stringify([]));
    const mockWriteFileSync = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {});

    await userService.registerUser(mockUser);

    expect(mockReadFileSync).toHaveBeenCalledWith(
      "/mock/path/users.json",
      "utf-8"
    );
    expect(mockWriteFileSync).toHaveBeenCalledWith(
      "/mock/path/users.json",
      JSON.stringify([mockUser], null, 2)
    );
    expect(mockWriteFileSync).toHaveBeenCalledTimes(1);
  });

  it("should log an error if there is an issue reading the users file", async () => {
    const mockReadFileSync = jest
      .spyOn(fs, "readFileSync")
      .mockImplementation(() => {
        throw new Error("File not found");
      });
    const consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    await userService.registerUser(mockUser);

    expect(mockReadFileSync).toHaveBeenCalled();
    expect(consoleErrorMock).toHaveBeenCalledWith(
      "Error accessing users.json:",
      expect.any(Error)
    );

    // Cleanup
    consoleErrorMock.mockRestore();
  });
});
