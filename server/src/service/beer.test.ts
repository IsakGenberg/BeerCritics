import { BeerService } from "./beer";

test("Adding a review increases number of reviewers", async () => {
    const rating = 1;
    const name = "Corona"
    const beerService = new BeerService();
    const beers = await beerService.getBeers();
    const coronaBeer = beers.find((b) => b.name === "Corona");
    if (coronaBeer != undefined){
        const prevReviews = coronaBeer.reviewer;
        await beerService.addReview(name,rating);
        expect(beers.find((beer) => (beer.name == "Corona") && (beer.reviewer == (prevReviews + 1)))).toBeTruthy();
    }
    else{
        fail("Could not find beer")
    }
})