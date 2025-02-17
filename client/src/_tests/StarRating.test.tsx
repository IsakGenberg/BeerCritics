import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StarRating from "../components/StarRating";

describe("StarRating component", () => {
  test("A rating of 4 should render four filled stars and one empty star", () => {
    render(<StarRating rating={4} />);
    const ratingElement = screen.getByText("★★★★☆");
    expect(ratingElement).toBeInTheDocument();
  });

  test("A rating of 0 should render five empty stars", () => {
    render(<StarRating rating={0} />);
    const ratingElement = screen.getByText("☆☆☆☆☆");
    expect(ratingElement).toBeInTheDocument();
  });
});