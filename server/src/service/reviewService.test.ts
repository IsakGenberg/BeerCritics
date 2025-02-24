import { readFileSync } from "fs";
import path from "path";
import { jest } from "@jest/globals";
import { ReviewService } from "./reviewService";
import { Review } from "../model/review";
import { Beer } from "../model/beer";

jest.mock("fs");
const reviewService = new ReviewService();
describe("getReviewsBeer", () => {
  const mockReviews: Review[] = [
    {
      beer: "Heineken",
      user: "JohnDoe",
      rating: 4,
      date: new Date("2024-02-18"),
      description: "Crisp and refreshing!",
    },
    {
      beer: "Guinness",
      user: "JaneDoe",
      rating: 5,
      date: new Date("2024-02-18"),
      description: "Perfect stout.",
    },
  ];

  beforeEach(() => {
    process.env.REVIEWS_JSON_PATH = "/mock/path/reviews.json";
    (readFileSync as jest.Mock).mockReturnValue(JSON.stringify(mockReviews));
  });

  it("should return reviews for the specified beer", async () => {
    const reviews = await reviewService.getReviewsBeer({
      name: "Heineken",
      rating: 0,
      brewery: "",
      style: "",
      abv: 0,
      imagePath: "",
    });
    expect(reviews).toEqual([
      {
        beer: "Heineken",
        user: "JohnDoe",
        rating: 4,
        date: "2024-02-18T00:00:00.000Z",
        description: "Crisp and refreshing!",
      },
    ]);
  });

  it("should return an empty array if no reviews match", async () => {
    const reviews = await reviewService.getReviewsBeer({
      name: "Corona",
      rating: 0,
      brewery: "",
      style: "",
      abv: 0,
      imagePath: "",
    });
    expect(reviews).toEqual([]);
  });

  it("should throw an error if REVIEWS_JSON_PATH is not defined", async () => {
    delete process.env.REVIEWS_JSON_PATH;
    await expect(
      reviewService.getReviewsBeer({
        name: "Heineken",
        rating: 0,
        brewery: "",
        style: "",
        abv: 0,
        imagePath: "",
      })
    ).rejects.toThrow("REVIEWS_JSON_PATH is not defined in the .env file");
  });
});
