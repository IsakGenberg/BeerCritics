import { Beer } from "../model/beer";

export interface IBeerService {
  getAllBeers(): Promise<Beer[]>;

  getBeer(beer: string): Promise<Beer | undefined>;
}
