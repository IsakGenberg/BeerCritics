import { Review } from "../model/review";
import { Beer } from "../model/beer";
import { User } from "../model/user";
import path from "path";
import dotenv from "dotenv";
import { readFile, readFileSync } from "fs";

const fs = require("fs");
dotenv.config();

export class ReviewService {
  async addReview(review: Review): Promise<void> {
    const filePath = process.env.REVIEWS_JSON_PATH;

    if (!filePath) {
      throw new Error("REVIEWS_JSON_PATH is not defined in the .env file");
    }
    const absolutePath = path.resolve(filePath);

    try {
      let data = fs.readFileSync(absolutePath, "utf-8");
      let reviews = JSON.parse(data);
      reviews.push(review);

      fs.writeFileSync(absolutePath, JSON.stringify(reviews, null, 2));
      console.log("Review added successfully!");
    } catch (err) {
      console.error("Error accessing users.json:", err);
    }
  }

  async getReviewsBeer(beer: Beer): Promise<Review[]> {
    const filePath = process.env.REVIEWS_JSON_PATH;

    if (!filePath) {
      throw new Error("REVIEWS_JSON_PATH is not defined in the .env file");
    }

    const absolutePath = path.resolve(filePath);
    const reviews: Review[] = JSON.parse(readFileSync(absolutePath, "utf-8"));

    return reviews.filter((review) => review.beer === beer.name);
  }

  async getReviewsUser(user: User): Promise<Review[]> {
    const filePath = process.env.REVIEWS_JSON_PATH;

    if (!filePath) {
      throw new Error("REVIEWS_JSON_PATH is not defined in the .env file");
    }

    const absolutePath = path.resolve(filePath);
    const reviews: Review[] = JSON.parse(readFileSync(absolutePath, "utf-8"));

    return reviews.filter((review) => review.user === user.username);
  }
}
