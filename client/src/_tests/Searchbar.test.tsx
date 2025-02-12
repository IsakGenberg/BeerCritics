import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../components/SearchBar";

describe("Searchbar tests", () => {
  it("stores the user input in the searchbar", () => {
    render(<SearchBar />);
    const searchbar = screen.getByRole("textbox");
    fireEvent.change(searchbar, { target: { value: "Test input" } });
    expect(searchbar).toHaveValue("Test input");
  });
});
