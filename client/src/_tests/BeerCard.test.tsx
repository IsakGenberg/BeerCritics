
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BeerCard from "../components/BeerCard";

describe("BeerCard component", () => {
  const beerCardProps = {
    imagePath: "birramoretti.png",
    name: "Birra Moretti",
    brewery: "Heineken Italia",
    style: "Öl, Ljus lager, Italiensk",
    abv: 5.5,
    rating: 4,
    numReviewers: 52,
  };

  test("renders the beer name correctly", () => {
    render(<BeerCard {...beerCardProps} />);
    const nameElement = screen.getByText(beerCardProps.name);
    expect(nameElement).toBeInTheDocument();
  });

  test("renders the brewery name correctly", () => {
    render(<BeerCard {...beerCardProps} />);
    const breweryElement = screen.getByText(beerCardProps.brewery);
    expect(breweryElement).toBeInTheDocument();
  });

  test("renders the beer style correctly", () => {
    render(<BeerCard {...beerCardProps} />);
    const styleElement = screen.getByText(beerCardProps.style);
    expect(styleElement).toBeInTheDocument();
  });

  test("renders the ABV correctly", () => {
    render(<BeerCard {...beerCardProps} />);
    const abvElement = screen.getByText(`${beerCardProps.abv}%`);
    expect(abvElement).toBeInTheDocument();
  });

  test("renders the star rating correctly", () => {
    render(<BeerCard {...beerCardProps} />);
    const ratingElement = screen.getByText("★★★★☆");
    expect(ratingElement).toBeInTheDocument();
  });

  test("renders the number of reviewers correctly", () => {
    render(<BeerCard {...beerCardProps} />);
    const numReviewersElement = screen.getByText(
      `(${beerCardProps.numReviewers})`
    );
    expect(numReviewersElement).toBeInTheDocument();
  });

  test("renders the image correctly", () => {
    render(<BeerCard {...beerCardProps} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src", beerCardProps.imagePath);
  });
});
