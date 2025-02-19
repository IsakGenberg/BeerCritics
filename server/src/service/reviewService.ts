import { Review } from "../model/review";

export class ReviewService {
  private reviews: Review[] = [
    {
      beer: "Heineken",
      user: "Irre",
      rating: 4,
      description: "This beer is pretty good",
    },
    {
      beer: "Corona",
      user: "Luqas",
      rating: 5,
      description: "This beer is really nice",
    },
    {
      beer: "Guinness",
      user: "Pimme",
      rating: 1,
      description: "I hate this beer, and I hate Ireland",
    },
    {
      beer: "Guinness",
      user: "Hannah",
      rating: 5,
      description: "I will serve this next PU provning",
    },
  ];
}
