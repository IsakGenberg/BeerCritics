import { Beer } from "../model/beer";
import { IBeerService } from "../serviceInterfaces/IBeerService";
import { BeerModel } from "../../db/beer.db";

export class BeerService implements IBeerService {
  async addBeer(beer: Beer) {}

  async getAllBeers(): Promise<Beer[]> {
    return BeerModel.findAll();
  }

  async getBeer(beer: string): Promise<Beer | undefined> {
    const beerModel = await BeerModel.findOne({ where: { name: beer } });

    if (!beerModel) return undefined;

    return {
      name: beerModel.name,
      rating: beerModel.rating,
      brewery: beerModel.brewery,
      style: beerModel.style,
      abv: beerModel.abv,
      imagePath: beerModel.imagePath,
    };
  }
}
