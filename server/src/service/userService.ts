import { User } from "../model/user";
import path from "path";
import dotenv from "dotenv";

const fs = require('fs');
dotenv.config();

export class UserService {
  
  
  
  private users: User[] = [
    {
      username: "reach",
      password: "12345",
    },
    {
      username: "hannah",
      password: "12345",
    },
    {
      username: "irre",
      password: "12345",
    },
    {
      username: "pimme",
      password: "12345",
    },
  ];

  
  

  
async registerUser(username: string, password: string): Promise<void> {
      const filePath = process.env.USERS_JSON_PATH;
  
      if (!filePath) {
          throw new Error("USERS_JSON_PATH is not defined in the .env file");
      }
  
      const absolutePath = path.resolve(filePath); 
  
      let user = { username, password };
  
      try {
          let data = fs.readFileSync(absolutePath, "utf-8");
          let users = JSON.parse(data);
          users.push(user);
  
          fs.writeFileSync(absolutePath, JSON.stringify(users, null, 2));
          console.log("User registered successfully.");
      } catch (err) {
          console.error("Error accessing users.json:", err);
      }
  }
  
}
