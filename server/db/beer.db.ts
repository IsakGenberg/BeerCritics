import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "./conn";

export class BeerModel extends Model<
  InferAttributes<BeerModel>,
  InferCreationAttributes<BeerModel>
> {
  declare name: string;
  declare rating: number;
  declare brewery: string;
  declare style: string;
  declare abv: number;
  declare imagePath: string;
}

BeerModel.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brewery: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    style: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    abv: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);
