import { Sequelize } from "sequelize";
export const sequelize = new Sequelize(
  "postgres://app_db_user:RadamsFavoriter@localhost:5432"
);
