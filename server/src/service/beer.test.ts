import { BeerService } from "./beer";
import * as SuperTest from "supertest";
import { app } from "../start";

const request = SuperTest.default(app);


test("Adding a review increases number of reviewers", async () => {
    const rating = 1;
    const name = "Corona"
    const beerService = new BeerService();
    const beers = await beerService.getBeers();
    const coronaBeer = beers.find((b) => b.name === "Corona");
    if (coronaBeer != undefined){
        const prevReviews = coronaBeer.reviewer;
        await beerService.addReview(name,rating);
        const updatedBeers = await beerService.getBeers();
        expect(updatedBeers.find((beer) => (beer.name == "Corona") && (beer.reviewer == (prevReviews + 1)))).toBeTruthy();
      
    }
    else{
        fail("Could not find beer")
    }
})

test("Trying to add a rating over 5 gives 400 error", async() => {
    const res1 = await request.patch("/").send({rating: 6});
    console.log(res1);
    expect(res1.statusCode).toEqual(400);
})