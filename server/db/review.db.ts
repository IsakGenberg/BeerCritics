import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "./conn";
import { UserModel } from "./user.db";
import { BeerModel } from "./beer.db";

/**
 * ReviewModel is a class that represents a review in the database.
 */
export class ReviewModel extends Model<
  InferAttributes<ReviewModel>,
  InferCreationAttributes<ReviewModel>
> {
  declare beer: string;
  declare user: string;
  declare rating: number;
  declare date: Date;
  declare description?: string;
}

ReviewModel.init(
  {
    beer: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: BeerModel,
        key: "name",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      primaryKey: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: UserModel,
        key: "username",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      primaryKey: true,
    },

    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["beer", "user"],
      },
    ],
    sequelize: sequelize,
  }
);

UserModel.hasMany(ReviewModel, { foreignKey: "user" });
ReviewModel.belongsTo(UserModel, { foreignKey: "user" });

BeerModel.hasMany(ReviewModel, { foreignKey: "beer" });
ReviewModel.belongsTo(BeerModel, { foreignKey: "beer" });

ReviewModel.afterCreate(async (review, options) => {
  await updateBeerRating(review.beer);
});

ReviewModel.afterUpdate(async (review, options) => {
  await updateBeerRating(review.beer);
});

ReviewModel.afterDestroy(async (review, options) => {
  await updateBeerRating(review.beer);
});
/**
 * Updates the rating of a beer in the database based on the average rating of all reviews for that beer.
 * @param beerName name of the beer to update the rating for
 */
async function updateBeerRating(beerName: string) {
  try {
    const reviews = await ReviewModel.findAll({
      where: { beer: beerName },
    });

    const averageRating =
      reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

    await BeerModel.update(
      { rating: averageRating },
      {
        where: { name: beerName },
      }
    );
  } catch (error) {
    console.error("Error updating beer rating:", error);
  }
}

sequelize
  .sync({ alter: true })
  .then(async () => {
    console.log("Tables synced");

    // Get all beers from the BeerModel
    const beers = await BeerModel.findAll();

    // Call updateBeerRating for each beer
    for (const beer of beers) {
      await updateBeerRating(beer.name);
    }
  })
  .catch((error) => console.error("Error syncing tables:", error));
module.exports = { UserModel, BeerModel, ReviewModel };

export default ReviewModel;
