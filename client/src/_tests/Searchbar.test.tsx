import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../components/searchbar/SearchBar";
import { BrowserRouter } from "react-router";

describe("Searchbar tests", () => {
  it("stores the user input in the searchbar", () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );
    const searchbar = screen.getByRole("textbox");
    fireEvent.change(searchbar, { target: { value: "Test input" } });
    expect(searchbar).toHaveValue("Test input");
  });

  it("renders on the screen", () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );
    const searchbar = screen.getByRole("textbox");
    expect(searchbar).toBeInTheDocument;
  });
});
