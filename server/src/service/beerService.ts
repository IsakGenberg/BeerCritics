import { Beer } from "../model/beer";
import path from "path";
import dotenv from "dotenv";

const fs = require('fs');
dotenv.config();

export class BeerService {
  private beers: Beer[] = [
    {
      name: "Heineken",
      rating: 4,
      brewery: "Stockholm brewery",
      style: "Lager",
      abv: 5,
      imagePath: "/heineken.png",
    },
    {
      name: "Corona",
      rating: 3,
      brewery: "Stockholm brewery",
      style: "Mexian Beer",
      abv: 2,
      imagePath: "/corona.png",
    },
    {
      name: "Guinness",
      rating: 2,
      brewery: "Ireland brewery",
      style: "Stout",
      abv: 5,
      imagePath: "/guinness.png",
    },
  ];

  async addBeer(beer: Beer): Promise<void>{
    const filePath = process.env.BEERS_JSON_PATH;
  
      if (!filePath) {
          throw new Error("BEERS_JSON_PATH is not defined in the .env file");
      }
  
      const absolutePath = path.resolve(filePath); 
  
      try {
          let data = fs.readFileSync(absolutePath, "utf-8");
          let users = JSON.parse(data);
          users.push(beer);
  
          fs.writeFileSync(absolutePath, JSON.stringify(users, null, 2));
          console.log("Beer added successfully!");
      } catch (err) {
          console.error("Error accessing users.json:", err);
      }
  
  }

  async getAllBeers(): Promise<Beer[]> {
    return JSON.parse(JSON.stringify(this.beers));
  }

  async getBeer(beer: string): Promise<Beer | undefined> {
    return this.beers.find((b) => b.name === beer);
  }
}
