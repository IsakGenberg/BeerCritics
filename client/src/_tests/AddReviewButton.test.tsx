import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddReviewButton from "../components/reviewButton/ReviewButton";
import { act } from "react";

describe("AddReviewButton component", () => {
  const beer = "BEER";

  test("renders the button correctly", () => {
    render(<AddReviewButton beer={beer} mode={"add"} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Add Review");
  });

  test("renders the modal when the button is clicked", () => {
    render(<AddReviewButton beer={beer} mode={"add"} />);
    const buttonElement = screen.getByRole("button");
    act(() => {
      buttonElement.click();
    });
    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();
  });
});
