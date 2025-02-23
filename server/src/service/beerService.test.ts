import { BeerService } from "./beerService";
import * as SuperTest from "supertest";
import { app } from "../start";
import { mock } from "node:test";

const request = SuperTest.default(app);

test("Calling getBeer with a non-existant beer returns undefined", async () => {
  const beerService = new BeerService();
  const beer = await beerService.getBeer("Royal");
  expect(beer == undefined);
});

test("addBeer is called with correct beer", async () => {
  const beerService = new BeerService();
  const addBeerSpy = jest.spyOn(beerService, "addBeer");
  const beer = {
    name: "Heineken",
    rating: 4,
    brewery: "Stockholm brewery",
    style: "Lager",
    abv: 5,
    imagePath: "/heineken.png",
  };
  await beerService.addBeer(beer);
  expect(addBeerSpy).toHaveBeenCalledWith(beer);
});
