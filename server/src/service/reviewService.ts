import { Review } from "../model/review";
import { IReviewService } from "../serviceInterfaces/IReviewService";
import { ReviewModel } from "../../db/review.db";

/**
 * ReviewService is a class that represents a service for reviews.
 */
export class ReviewService implements IReviewService {
  async addReview(review: Review) {
    ReviewModel.create({
      beer: review.beer,
      user: review.user,
      rating: review.rating,
      date: review.date,
      description: review.description,
    });
  }

  /**
   * 
   * @param beer name of the beer to get reviews for
   * @returns A list of reviews for the specified beer
   */
  async getReviewsBeer(beer: string): Promise<Review[]> {
    return await ReviewModel.findAll({ where: { beer: beer } });
  }

  /**
   * 
   * @param user username of the user to get reviews for
   * @returns A list of reviews posted by the specified user
   */
  async getReviewsUser(user: string): Promise<Review[]> {
    return await ReviewModel.findAll({ where: { user: user } });
  }

  /**
   * 
   * @param review object to be deleted from the database
   */
  async deleteReview(review: Review): Promise<void> {
    await ReviewModel.destroy({
      where: { beer: review.beer, user: review.user },
    });
  }

  /**
   * Updates an existing review in the database
   * @param review object to be updated in the database
   */
  async updateReview(review: Review) {
    try {
      await ReviewModel.update(
        {
          rating: review.rating,
          date: review.date,
          description: review.description,
        },
        {
          where: { beer: review.beer, user: review.user },
        }
      );
    } catch (error: any) {
      if (error.name === "SequelizeUniqueConstraintError") {
        throw new Error("Review already exists");
      }
      throw new Error("Database error: " + error.message);
    }

  }
}
