import { ReviewService } from "./reviewService";
import { Review } from "../model/review";

describe("ReviewService", () => {
  let reviewService: ReviewService;

  beforeEach(() => {
    reviewService = new ReviewService();
  });

  test("should add a new review", async () => {
    const newReview: Review = {
      beer: "Budweiser",
      user: "JohnDoe",
      rating: 4.0,
      date: new Date("2024-02-20"),
      description: "Smooth and crisp, a great choice for casual drinking.",
    };

    await reviewService.addReview(newReview);

    const beerReviews = await reviewService.getReviewsBeer("Budweiser");
    expect(beerReviews).toContainEqual(newReview);
  });

  test("should get all reviews for a specific beer", async () => {
    const heinekenReviews = await reviewService.getReviewsBeer("Heineken");

    expect(heinekenReviews.length).toBe(2);
    expect(heinekenReviews[0].beer).toBe("Heineken");
    expect(heinekenReviews[1].beer).toBe("Heineken");
  });

  test("should get all reviews from a specific user", async () => {
    const userReviews = await reviewService.getReviewsUser("Luqas");

    expect(userReviews.length).toBe(2);
    expect(userReviews.every((review) => review.user === "Luqas")).toBe(true);
  });

  test("should return an empty array when no reviews exist for a beer", async () => {
    const reviews = await reviewService.getReviewsBeer("NonExistentBeer");

    expect(reviews).toEqual([]);
  });

  test("should return an empty array when no reviews exist for a user", async () => {
    const reviews = await reviewService.getReviewsUser("UnknownUser");

    expect(reviews).toEqual([]);
  });
});
