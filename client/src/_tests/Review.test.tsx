import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Review from "../components/Review";

describe("Review component", () => {
  const reviewProps = {
    rating: 4,
    author: "John Doe",
    comment: "Great beer!",
    date: new Date("2023-10-01"),
  };

  test("A rating of 4 should render four filled stars and one empty star", () => {
    render(<Review {...reviewProps} />);
    const ratingElement = screen.getByText("★★★★☆");
    expect(ratingElement).toBeInTheDocument();
  });

  test("A rating of 0 should render five empty stars", () => {
    render(<Review {...reviewProps} rating={0} />);
    const ratingElement = screen.getByText("☆☆☆☆☆");
    expect(ratingElement).toBeInTheDocument();
  });

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
