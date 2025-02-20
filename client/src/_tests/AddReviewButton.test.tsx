import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddReviewButton from "../components/review/AddReviewButton";
import { act } from "react";

describe("AddReviewButton component", () => {

  test("renders the button correctly", () => {
    render(<AddReviewButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Add Review");
  });

  test("renders the modal when the button is clicked", () => {
    render(<AddReviewButton />);
    const buttonElement = screen.getByRole("button");
    act(() => {
      buttonElement.click();
    });
    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();
  });
});
