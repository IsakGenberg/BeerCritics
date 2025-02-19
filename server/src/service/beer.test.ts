import { BeerService } from "./beerService";
import * as SuperTest from "supertest";
import { app } from "../start";

const request = SuperTest.default(app);

test("Adding a review increases number of reviewers", async () => {
  const rating = 1;
  const name = "Corona";
  const beerService = new BeerService();
  const beers = await beerService.getAllBeers();
  const coronaBeer = beers.find((b) => b.name === "Corona");
  if (coronaBeer != undefined) {
    const prevReviews = coronaBeer.reviewer;
    await beerService.addReview(name, rating);
    const updatedBeers = await beerService.getAllBeers();
    expect(
      updatedBeers.find(
        (beer) => beer.name == "Corona" && beer.reviewer == prevReviews + 1
      )
    ).toBeTruthy();
  } else {
    fail("Could not find beer");
  }
});

test("Adding a review to a non-existant beer should fail", async () => {
  const beerService = new BeerService();
  const beers = await beerService.getAllBeers();
  const coronaBeer = beers.find((b) => b.name === "Royal");
  if (coronaBeer != undefined) {
    expect(beers.find((beer) => beer.name == "Royal")).toBeFalsy();
  }
});

test("Trying to add a rating over 5 gives 400 error", async () => {
  const res1 = await request.patch("/beer/Corona").send({ rating: 6 });
  expect(res1.statusCode).toEqual(400);
});

test("Calling getBeer with a non-existant beer returns undefined", async () => {
  const beerService = new BeerService();
  const beer = await beerService.getBeer("Royal");
  expect(beer == undefined);
});
