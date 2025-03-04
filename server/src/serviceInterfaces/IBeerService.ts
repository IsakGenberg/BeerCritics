import { Beer } from "../model/beer";

export interface IBeerService {
  addBeer(beer: Beer): Promise<void>;

  getAllBeers(): Promise<Beer[]>;

  getBeer(beer: string): Promise<Beer | undefined>;
}
