import { ReviewService } from "../reviewService";
import { Review } from "../../model/review";
import { ReviewModel } from "../../../db/review.db";

jest.mock("../../../db/review.db", () => ({
  ReviewModel: {
    findAll: jest.fn(),
    destroy: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
}));

describe("ReviewService", () => {
  let reviewService: ReviewService;

  beforeEach(() => {
    reviewService = new ReviewService();
    jest.clearAllMocks();
  });

  test("should add a new review", async () => {
    const newReview: Review = {
      beer: "Budweiser",
      user: "JohnDoe",
      rating: 4.0,
      date: new Date("2024-02-20"),
      description: "Smooth and crisp, a great choice for casual drinking.",
    };

    (ReviewModel.create as jest.Mock).mockResolvedValue({
      beer: newReview.beer,
      user: newReview.user,
      rating: newReview.rating,
      date: newReview.date,
      description: newReview.description,
    });

    await reviewService.addReview(newReview);

    (ReviewModel.findAll as jest.Mock).mockResolvedValue([newReview]);

    const beerReviews = await reviewService.getReviewsBeer("Budweiser");

    expect(beerReviews).toContainEqual(newReview);
  });

  test("should get all reviews for a specific beer", async () => {
    const review: Review = {
      beer: "Budweiser",
      user: "JohnDoe",
      rating: 4.0,
      date: new Date("2024-02-20"),
      description: "Smooth and crisp, a great choice for casual drinking.",
    };

    (ReviewModel.findAll as jest.Mock).mockResolvedValue([review]);

    const budweiserReviews = await reviewService.getReviewsBeer("Budweiser");

    expect(budweiserReviews.length).toBe(1);
    expect(budweiserReviews).toContainEqual(review);
  });

  test("should get all reviews from a specific user", async () => {
    const review: Review = {
      beer: "Budweiser",
      user: "JohnDoe",
      rating: 4.0,
      date: new Date("2024-02-20"),
      description: "Smooth and crisp, a great choice for casual drinking.",
    };

    (ReviewModel.findAll as jest.Mock).mockResolvedValue([review]);

    const userReviews = await reviewService.getReviewsUser("JohnDoe");

    expect(userReviews.length).toBe(1);
    expect(userReviews.every((review) => review.user === "JohnDoe")).toBe(true);
  });

  test("should return an empty array when no reviews exist for a beer", async () => {
    (ReviewModel.findAll as jest.Mock).mockResolvedValue([]);

    const reviews = await reviewService.getReviewsBeer("NonExistentBeer");

    expect(reviews).toEqual([]);
  });

  test("should return an empty array when no reviews exist for a user", async () => {
    (ReviewModel.findAll as jest.Mock).mockResolvedValue([]);

    const reviews = await reviewService.getReviewsUser("UnknownUser");

    expect(reviews).toEqual([]);
  });
});
