import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginModal from "../components/loginModal/LoginModal";

describe("LoginModal component", () => {
    test("renders the modal correctly", () => {
        render(<LoginModal show={true} handleClose={() => {}} />);
        const modalElement = screen.getByRole("dialog");
        expect(modalElement).toBeInTheDocument();
    });

    test("Clicking the close button calls the handleClose function", () => {
        const handleClose = jest.fn();
        render(<LoginModal show={true} handleClose={handleClose} />);
        const closeButton = screen.getByText("Close");
        closeButton.click();
        expect(handleClose).toHaveBeenCalled();
    });
});
