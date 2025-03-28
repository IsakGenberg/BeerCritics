import { Review } from "../model/review";

export interface IReviewService {
  addReview(review: Review): Promise<void>;

  getReviewsBeer(beerName: string): Promise<Review[]>;

  getReviewsUser(user: string): Promise<Review[]>;

  deleteReview(review: Review): Promise<void>;

  updateReview(review: Review): Promise<void>;
}
