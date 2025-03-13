import { BeerService } from ".././beerService";
import { Beer } from "../../model/beer";
import { BeerModel } from "../../../db/beer.db";

jest.mock("../../../db/beer.db", () => ({
  BeerModel: {
    findAll: jest.fn(),
    findOne: jest.fn()
  },
}));



describe("BeerService", () => {
  let beerService: BeerService;

  beforeEach(() => {
    beerService = new BeerService();
    jest.clearAllMocks();
  });

  //METHOD NOT IMPLEMENTED IN THE SERVICE
  
  // test("should add a new beer", async () => {
  //   const newBeer: Beer = {
  //     name: "Budweiser",
  //     rating: 4.0,
  //     brewery: "Bud Brewing Co.",
  //     style: "Lager",
  //     abv: 5.0,
  //     imagePath: "budweiser.png",
  //   };

  //   await beerService.addBeer(newBeer);

  //   const beers = await beerService.getAllBeers();
  //   expect(beers).toContainEqual(newBeer);
  // });

  test("should return all beers", async () => {
    const beer: Beer = {
      name: "Budweiser",
      rating: 4.0,
      brewery: "Bud Brewing Co.",
      style: "Lager",
      abv: 5.0,
      imagePath: "budweiser.png",
    };

    (BeerModel.findAll as jest.Mock).mockResolvedValue([beer]);

    const beers = await beerService.getAllBeers();
    expect(beers.length).toBe(1);
  });

  test("should return the correct beer when searched by name", async () => {
    const budweiser: Beer = {
      name: "Budweiser",
      rating: 4.0,
      brewery: "Bud Brewing Co.",
      style: "Lager",
      abv: 5.0,
      imagePath: "budweiser.png",
    };

    (BeerModel.findOne as jest.Mock).mockResolvedValue(budweiser);

    const beer = await beerService.getBeer("Budweiser");

    expect(beer).toBeDefined();
    expect(beer?.name).toBe("Budweiser");
    expect(beer?.brewery).toBe("Bud Brewing Co.");
  });

  test("should return undefined when searching for a non-existent beer", async () => {
    (BeerModel.findOne as jest.Mock).mockResolvedValue(undefined);
    const beer = await beerService.getBeer("NonExistentBeer");
    expect(beer).toBeUndefined();
  });
});
