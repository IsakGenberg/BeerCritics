import express, { Request, Response } from "express";
import { ReviewService } from "../service/reviewService";
import { Beer } from "../model/beer";
import { Review } from "../model/review";
import { IReviewService } from "../serviceInterfaces/IReviewService";

export const reviewRouter = express.Router();
const reviewService: IReviewService = new ReviewService();

interface ReviewRequest extends Request {
  session: any;
}

reviewRouter.get(
  "/myreviews",
  async (req: ReviewRequest, res: Response<Review[] | string>) => {
    try {
      if (!req.session.username) {
        res.status(401).send("Not logged in");
        return;
      }
      const reviews = await reviewService.getReviewsUser(req.session.username);
      res.status(200).send(reviews);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);

reviewRouter.get(
  "/:name",
  async (req: Request<{ name: string }>, res: Response) => {
    try {
      const beerName = req.params.name;
      const reviews = await reviewService.getReviewsBeer(beerName);
      res.status(200).send(reviews);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);

reviewRouter.post("/", async (req: ReviewRequest, res: Response) => {
  try {
    if (!req.session.username) {
      res.status(401).send("Not logged in");
      return;
    }
    const review: Review = req.body;
    await reviewService.addReview(review);
    res.status(201).send("Review added");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});


reviewRouter.delete("/", async (req: ReviewRequest, res: Response) => {
  try {
    const review: Review = req.body;
    if (req.session.username !== review.user) {
      res.status(401).send("Not authorized to delete review");
    }
    await reviewService.deleteReview(review);
    res.status(200).send("Review successfully deleted");
  }
reviewRouter.put("/", async (req: ReviewRequest, res: Response) => {
  try {
    if (!req.session.username) {
      res.status(401).send("Not logged in");
    }
    const review: Review = req.body;
    await reviewService.updateReview(review);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
