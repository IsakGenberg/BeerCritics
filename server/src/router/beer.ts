import exp from "constants";
import { Beer } from "../model/beer";
import { BeerService } from "../service/beerService";
import express, { Request, Response } from "express";
import { IBeerService } from "../serviceInterfaces/IBeerService";
/**
 * Router for get and post beer endpoints
 */
export const beerRouter = express.Router();
const beerService: IBeerService = new BeerService();

/**
 * Get all beers in the database
 */
beerRouter.get("/", async (req: Request, res: Response) => {
  try {
    const beers = await beerService.getAllBeers();
    res.status(200).send(beers);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

/**
 * Get a specific beer from the database
 */
beerRouter.get(
  "/:name",
  async (req: Request<{ name: string }, {}, {}>, res: Response) => {
    try {
      const beerName = req.params.name;
      const beer = await beerService.getBeer(beerName);
      res.status(200).send(beer);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);

/**
 * Add a beer to the database
 */
beerRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { beer } = req.body;
    await beerService.addBeer(beer);
    res.status(201).send(`Added beer: ${beer.name}`);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
