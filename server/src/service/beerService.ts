import { Beer } from "../model/beer";
import { IBeerService } from "../serviceInterfaces/IBeerService";
import { BeerModel } from "../../db/beer.db";
/**
 * BeerService is a class that represents a service for beers.
 */
export class BeerService implements IBeerService {
  /**
   * Add a beer to the database
   * @param beer beer to be added to the database
   */
  async addBeer(beer: Beer) {}

  /**
   * 
   * @returns a list of all beers in the database
   */
  async getAllBeers(): Promise<Beer[]> {
    return BeerModel.findAll();
  }

  /**
   * 
   * @param beer name of the beer to be fetched
   * @returns Beer object if the beer exists in the database, otherwise undefined
   */
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
