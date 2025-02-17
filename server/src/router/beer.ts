import exp from "constants";
import { Beer } from "../model/beer";
import { BeerService} from "../service/beer";
import express, { Request, Response } from "express";

export const beerRouter = express.Router();
const beerService = new BeerService();


beerRouter.get('/', async (req: Request, res: Response) => {
    try{
        const beers = await beerService.getAllBeers();
        res.status(200).send(beers);
    }catch(e: any){
        res.status(500).send(e.message);
    }

});


beerRouter.get('/:name', async (
    req: Request<{name: string}, {}, {}>, 
    res: Response) => {
        try{
            const beerName = req.params.name;
            const beer = await beerService.getBeer(beerName);
            res.status(200).send(beer)
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    }
);





beerRouter.patch('/:name', async (
    req: Request<{name: string}, {}, {rating: number}>, 
    res: Response) => {
        try{
            const beer = req.params.name;
            const rating = req.body.rating;
            if (rating > 5){
                res.status(400).send("Rating can't be larger than 5");
                return;
            }
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