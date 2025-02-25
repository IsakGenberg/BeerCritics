import { Beer } from "../model/beer";

export class BeerService {
  beers: Beer[] = [
    {
      name: "Corona",
      rating: 4.5,
      brewery: "Sunset Brews",
      style: "IPA",
      abv: 6.8,
      imagePath: "corona.png",
    },
    {
      name: "Guinness",
      rating: 4.7,
      brewery: "Midnight Brewery",
      style: "Stout",
      abv: 9.2,
      imagePath: "guinness.png",
    },
    {
      name: "Heineken",
      rating: 4.2,
      brewery: "Harvest Hops",
      style: "Pale Ale",
      abv: 5.5,
      imagePath: "heineken.png",
    },
    {
      name: "StigBergets",
      rating: 4.6,
      brewery: "Mountain Peak Brewing",
      style: "Pilsner",
      abv: 4.8,
      imagePath: "stigbergetsIPA.png",
    },
    {
      name: "BirraMonretti",
      rating: 4.3,
      brewery: "Fruit Fusion",
      style: "Sour Ale",
      abv: 5.0,
      imagePath: "birramoretti.png",
    },
  ];
  async addBeer(beer: Beer) {
    this.beers.push(beer);
  }

  async getAllBeers(): Promise<Beer[]> {
    return this.beers;
  }

  async getBeer(beer: string): Promise<Beer | undefined> {
    return this.beers.find((b: { name: string }) => b.name === beer);
  }
}
