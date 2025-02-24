import express, { Request, Response } from "express";
import { ReviewService } from "../service/reviewService";
import { Beer } from "../model/beer";
import { Review } from "../model/review";

export const reviewRouter = express.Router();
const reviewService = new ReviewService();

interface ReviewRequest extends Request	{
  session:any
}

reviewRouter.get(
  "/myreviews",
  async (req: ReviewRequest, res: Response<Review[] | string>) => {
    try {
      if (!req.session.user) {
        res.status(401).send("Not logged in");
        return;
      }
      const username = req.session.user.username;
      const reviews = await reviewService.getReviewsUser(username);
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

reviewRouter.post("/", async (req: Request, res: Response) => {
  try {
    const review: Review = req.body; 
    await reviewService.addReview(review);
    res.status(201).send("Review added");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});


