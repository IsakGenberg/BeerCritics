import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReviewCard from "../components/review/ReviewCard";
import { AuthProvider } from "../authprovider";

describe("Review component", () => {
  const reviewProps = {
    beer: "Corona",
    rating: 4,
    user: "John Doe",
    description: "Great beer!",
    date: new Date("2023-10-01"),
  };
  beforeEach(() => {
    render(
      <AuthProvider>
        <ReviewCard {...reviewProps} />
      </AuthProvider>
    );
  });

  test("Renders the author correctly", () => {
    const authorElement = screen.getByText(reviewProps.user);
    expect(authorElement).toBeInTheDocument();
  });

  test("Renders the comment correctly", () => {
    const commentElement = screen.getByText(reviewProps.description);
    expect(commentElement).toBeInTheDocument();
  });

  test("Renders the date correctly", () => {
    const dateElement = screen.getByText(reviewProps.date.toLocaleDateString());
    expect(dateElement).toBeInTheDocument();
  });
});
