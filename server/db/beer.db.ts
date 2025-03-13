import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "./conn";
/**
 * BeerModel is a class that represents a beer in the database.
 */
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
      primaryKey: true,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
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
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
  }
);
