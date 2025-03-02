import { Review } from "../model/review";
import { IReviewService } from "../serviceInterfaces/IReviewService";

export class ReviewService implements IReviewService {
  reviews: Review[] = [
    {
      beer: "Corona",
      user: "Luqas",
      rating: 4.5,
      date: new Date("2024-02-10"),
      description:
        "A fantastic IPA with a bold citrus aroma and a smooth finish. Definitely a must-try!",
    },
    {
      beer: "Heineken",
      user: "Hannah",
      rating: 4.8,
      date: new Date("2024-02-15"),
      description:
        "Rich, dark, and full of chocolatey goodness. Perfect for stout lovers!",
    },
    {
      beer: "Guinness",
      user: "Pimme",
      rating: 4.2,
      date: new Date("2024-01-28"),
      description:
        "A well-balanced pale ale with a crisp malt backbone and just the right amount of bitterness.",
    },
    {
      beer: "Heineken",
      user: "Luqas",
      rating: 4.6,
      date: new Date("2024-02-02"),
      description:
        "Light and refreshing with a clean finish. Great choice for a hot day!",
    },
    {
      beer: "Corona",
      user: "Irre",
      rating: 4.3,
      date: new Date("2024-01-20"),
      description:
        "Tangy and fruity with a delightful cherry zing. Not too sour, just right!",
    },
  ];

  async addReview(review: Review) {
    this.reviews.push(review);
  }

  async getReviewsBeer(beer: string): Promise<Review[]> {
    return this.reviews.filter((review) => review.beer === beer);
  }

  async getReviewsUser(user: string): Promise<Review[]> {
    return this.reviews.filter((review) => review.user === user);
  }
}
