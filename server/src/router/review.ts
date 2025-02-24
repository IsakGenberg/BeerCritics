import express, { Request, Response } from "express";
import { ReviewService } from "../service/reviewService";
import { Beer } from "../model/beer";

export const reviewRouter = express.Router();
const reviewService = new ReviewService();

reviewRouter.get(
  "/:name",
  async (req: Request<{ name: string }>, res: Response) => {
    try {
      const beerName = req.params.name;
      const reviews = await reviewService.getReviewsBeer({
        name: beerName,
        rating: 0,
        brewery: "",
        style: "",
        abv: 0,
        imagePath: "",
      });
      res.status(200).send(reviews);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);
