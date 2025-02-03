import { Beer } from "../model/beer";

export class BeerService {
    private beers: Beer[] = [
        { name: 'Heineken', rating: 2, reviewer: 1 },
        { name: 'Guinness', rating: 4, reviewer: 2 },
        { name: 'Corona', rating: 3, reviewer: 3 },
    ];
    async getBeers(): Promise<Beer[]> {
        return JSON.parse(JSON.stringify(this.beers));
    }
    async addReview(name: string, rating: number): Promise<Beer | undefined> {
        const beerToReview = this.beers.find((b) => b.name === name);
        if(!beerToReview) {
            return undefined;
        }
        beerToReview.reviewer++;
        beerToReview.rating = (beerToReview.rating + rating) / beerToReview.reviewer;
        return JSON.parse(JSON.stringify(beerToReview));
    }
}