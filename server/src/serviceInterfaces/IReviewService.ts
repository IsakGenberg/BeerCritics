import { Review } from "../model/review";

export interface IReviewService {
  addReview(review: Review): Promise<void>;

  getReviewsBeer(beer: string): Promise<Review[]>;

  getReviewsUser(user: string): Promise<Review[]>;

  deleteReview(review: Review): Promise<void>;
}
