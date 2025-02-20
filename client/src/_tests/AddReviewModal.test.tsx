import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddReviewModal from "../components/review/AddReviewModal";

describe("AddReviewModal component", () => {
    test("renders the modal correctly", () => {
        render(<AddReviewModal show={true} handleClose={() => {}} handleSave={() => {}} />);
        const modalElement = screen.getByRole("dialog");
        expect(modalElement).toBeInTheDocument();
    });

    test("Clicking the close button calls the handleClose function", () => {
        const handleClose = jest.fn();
        render(<AddReviewModal show={true} handleClose={handleClose} handleSave={() => {}} />);
        const closeButton = screen.getByText("Close");
        closeButton.click();
        expect(handleClose).toHaveBeenCalled();
    });

    test("Clicking the Submit Review button calls the handleSave function", () => {
        const handleSave = jest.fn();
        render(<AddReviewModal show={true} handleClose={() => {}} handleSave={handleSave} />);
        const saveButton = screen.getByText("Submit Review");
        saveButton.click();
        expect(handleSave).toHaveBeenCalled();
    });
});