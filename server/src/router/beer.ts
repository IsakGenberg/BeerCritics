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

beerRouter.patch('/:name', async (
    req: Request<{}, {}, {name: string, rating: number}>, 
    res: Response) => {
        try{
            const beer = req.body.name;
            const rating = req.body.rating;
            const updatedBeer = await beerService.addReview(beer, rating);
            if(!updatedBeer){
                res.status(404).send('Beer not found');
            }else{
                res.status(200).send(updatedBeer);
            }
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    }
);