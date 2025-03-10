import { Review } from "../model/review";

export interface IReviewService {
  addReview(review: Review): Promise<void>;

  getReviewsBeer(beerName: string): Promise<Review[]>;

  getReviewsUser(user: string): Promise<Review[]>;
}
