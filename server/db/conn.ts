import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not defined");
}

/**
 * Instantiates a connection to the database
 */
export const sequelize = new Sequelize(process.env.DATABASE_URL);
