import exp from "constants";
import { Beer } from "../model/beer";
import { BeerService} from "../service/beer";
import express, { Request, Response } from "express";

const beerService = new BeerService();
export const beerRouter = express.Router();

beerRouter.get('/', async (req: Request, res: Response) => {
    try{
        const beers = await beerService.getBeers();
        res.status(200).send(beers);
    }catch(e: any){
        res.status(500).send(e.message);
    }

});

beerRouter.patch("/", async (
    req: Request<{}, {}, {rating: number}>, 
    res: Response) => {
        try{
            const beer = "Royal"
            const rating = req.body.rating;
            if (rating > 5){
                res.status(400).send("Rating can't be larger than 5")
            }
            const updatedBeer = await beerService.addReview(beer, rating);
            if(!updatedBeer){
                res.status(200).send('Beer not found');
            }else{
                res.status(200).send(updatedBeer);
            }
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    }
);