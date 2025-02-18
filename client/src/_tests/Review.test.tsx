import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Review from "../components/review/Review";

describe("Review component", () => {
  const reviewProps = {
    rating: 4,
    author: "John Doe",
    comment: "Great beer!",
    date: new Date("2023-10-01"),
  };

  test("Renders the author correctly", () => {
    render(<Review {...reviewProps} />);
    const authorElement = screen.getByText(reviewProps.author);
    expect(authorElement).toBeInTheDocument();
  });

  test("Renders the comment correctly", () => {
    render(<Review {...reviewProps} />);
    const commentElement = screen.getByText(reviewProps.comment);
    expect(commentElement).toBeInTheDocument();
  });

  test("Renders the date correctly", () => {
    render(<Review {...reviewProps} />);
    const dateElement = screen.getByText(reviewProps.date.toLocaleDateString());
    expect(dateElement).toBeInTheDocument();
  });
});
