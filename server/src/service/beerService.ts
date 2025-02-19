import { Beer } from "../model/beer";

export class BeerService {
  private beers: Beer[] = [
    {
      name: "Heineken",
      rating: 4,
      brewery: "Stockholm brewery",
      style: "Lager",
      abv: 5,
      imagePath: "../../../client/public/heineken.png",
    },
    {
      name: "Corona",
      rating: 3,
      brewery: "Stockholm brewery",
      style: "Lager",
      abv: 2,
      imagePath: "../../../client/public/corona.png",
    },
    {
      name: "Guinness",
      rating: 2,
      brewery: "Ireland brewery",
      style: "Stout",
      abv: 5,
      imagePath: "../../../client/public/guinness.png",
    },
  ];

  async getAllBeers(): Promise<Beer[]> {
    return JSON.parse(JSON.stringify(this.beers));
  }

  async getBeer(beer: string): Promise<Beer | undefined> {
    return this.beers.find((b) => b.name === beer);
  }
}
