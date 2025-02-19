import { Beer } from "../model/beer";

export class BeerService {
    private beers: Beer[] = [
        { name: 'Heineken', rating: 2, reviewer: 1 },
        { name: 'Guinness', rating: 4, reviewer: 2 },
        { name: 'Corona', rating: 3, reviewer: 3 },
    ];

    async getAllBeers(): Promise<Beer[]> {
        return JSON.parse(JSON.stringify(this.beers));
    }

    async getBeer(beer: string): Promise<Beer | undefined> {
        return this.beers.find(b => b.name === beer);
    }
    

    async addReview(name: string, rating: number): Promise<Beer | undefined> {
        const beerToReview = this.beers.find((b) => b.name === name);
        if(!beerToReview) {
            return undefined;
        }
        const oldRating = beerToReview.rating*beerToReview.reviewer;
        beerToReview.reviewer++;
        beerToReview.rating = (oldRating + rating) / beerToReview.reviewer;
        return JSON.parse(JSON.stringify(beerToReview));
    }
}