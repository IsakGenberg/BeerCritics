import { BeerService } from ".././beerService";
import { Beer } from "../../model/beer";

describe("BeerService", () => {
  let beerService: BeerService;

  beforeEach(() => {
    beerService = new BeerService();
  });

  test("should add a new beer", async () => {
    const newBeer: Beer = {
      name: "Budweiser",
      rating: 4.0,
      brewery: "Bud Brewing Co.",
      style: "Lager",
      abv: 5.0,
      imagePath: "budweiser.png",
    };

    await beerService.addBeer(newBeer);

    const beers = await beerService.getAllBeers();
    expect(beers).toContainEqual(newBeer);
  });

  test("should return all beers", async () => {
    const beers = await beerService.getAllBeers();
    expect(beers.length).toBe(5);
  });

  test("should return the correct beer when searched by name", async () => {
    const beer = await beerService.getBeer("Guinness");

    expect(beer).toBeDefined();
    expect(beer?.name).toBe("Guinness");
    expect(beer?.brewery).toBe("Midnight Brewery");
  });

  test("should return undefined when searching for a non-existent beer", async () => {
    const beer = await beerService.getBeer("NonExistentBeer");
    expect(beer).toBeUndefined();
  });
});
