import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StarRating from "../components/StarRating";

describe("StarRating component", () => {
  test("A rating of 4 should render four filled stars and one empty star", () => {
    render(<StarRating rating={4} />);
    const filledStars = screen.getAllByText("★");
    const emptyStars = screen.getAllByText("☆");
    expect(filledStars).toHaveLength(4);
    expect(emptyStars).toHaveLength(1);
  });

  test("A rating of 0 should render five empty stars", () => {
    render(<StarRating rating={0} />);
    const emptyStars = screen.getAllByText("☆");
    expect(emptyStars).toHaveLength(5);
  });
});
