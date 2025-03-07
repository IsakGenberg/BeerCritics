import { Review } from "../model/review";
import { IReviewService } from "../serviceInterfaces/IReviewService";
import { ReviewModel } from "../../db/review.db";

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

  async getReviewsBeer(beer: string): Promise<Review[]> {
    return await ReviewModel.findAll({ where: { beer: beer } });
  }

  async getReviewsUser(user: string): Promise<Review[]> {
    return await ReviewModel.findAll({ where: { user: user } });
  }

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
