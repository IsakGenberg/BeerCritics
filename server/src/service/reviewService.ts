import { Review } from "../model/review";

export class ReviewService {
  private reviews: Review[] = [
    {
      beer: "Heineken",
      user: "Irre",
      rating: 4,
      date: new Date("2021-01-01"),
      description: "This beer is pretty good",
    },
    {
      beer: "Corona",
      user: "Luqas",
      rating: 5,
      date: new Date("2021-01-01"),
      description: "This beer is really nice",
    },
    {
      beer: "Guinness",
      user: "Pimme",
      rating: 1,
      date: new Date("2021-01-01"),
      description: "I hate this beer, and I hate Ireland",
    },
    {
      beer: "Guinness",
      user: "Hannah",
      rating: 5,
      date: new Date("2021-01-01"),
      description: "I will serve this next PU provning",
    },
  ];
}
