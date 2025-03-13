import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReviewModal from "../components/review/ReviewModal";

describe("ReviewModal component", () => {
  const beer = "BEER";

  test("renders the modal correctly", () => {
    render(
      <ReviewModal show={true} beer={beer} handleClose={() => {}} handleSave={() => {}} />
    );
    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();
  });

  test("Clicking the close button calls the handleClose function", () => {
    const handleClose = jest.fn();
    render(
      <ReviewModal
        show={true}
        beer={beer}
        handleClose={handleClose}
        handleSave={() => {}}
      />
    );
    const closeButton = screen.getByText("Close");
    closeButton.click();
    expect(handleClose).toHaveBeenCalled();
  });

  test("Clicking the Submit Review button calls the handleSave function", () => {
    const handleSave = jest.fn();
    render(
      <ReviewModal show={true} beer={beer} handleClose={() => {}} handleSave={handleSave} />
    );
    const saveButton = screen.getByText("Submit Review");
    saveButton.click();
    expect(handleSave).toHaveBeenCalled();
  });
});
