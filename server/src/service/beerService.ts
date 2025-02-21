import { Beer } from "../model/beer";
import path from "path";
import dotenv from "dotenv";
import { readFile, readFileSync } from "fs";

const fs = require("fs");
dotenv.config();

export class BeerService {
  async addBeer(beer: Beer): Promise<void> {
    const filePath = process.env.BEERS_JSON_PATH;

    if (!filePath) {
      throw new Error("BEERS_JSON_PATH is not defined in the .env file");
    }
    const absolutePath = path.resolve(filePath);

    try {
      let data = fs.readFileSync(absolutePath, "utf-8");
      let beers = JSON.parse(data);
      beers.push(beer);

      fs.writeFileSync(absolutePath, JSON.stringify(beers, null, 2));
      console.log("Beer added successfully!");
    } catch (err) {
      console.error("Error accessing users.json:", err);
    }
  }

  async getAllBeers(): Promise<Beer[]> {
    const filePath = process.env.BEERS_JSON_PATH;
    if (!filePath) {
      throw new Error("BEERS_JSON_PATH is not defined in the .env file");
    }
    const absolutePath = path.resolve(filePath);
    return JSON.parse(readFileSync(absolutePath, "utf-8"));
  }

  async getBeer(beer: string): Promise<Beer | undefined> {
    const filePath = process.env.BEERS_JSON_PATH;
    if (!filePath) {
      throw new Error("BEERS_JSON_PATH is not defined in the .env file");
    }
    const absolutePath = path.resolve(filePath);
    const beers = JSON.parse(readFileSync(absolutePath, "utf-8"));
    return beers.find((b: { name: string }) => b.name === beer);
  }
}
