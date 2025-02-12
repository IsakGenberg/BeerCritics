import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import MyNavbar from "../components/Navbar";

describe("MyNavbar Component", () => {
  test("renders the Navbar component", () => {
    render(<MyNavbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("displays the correct brand name", () => {
    render(<MyNavbar />);
    expect(screen.getByText("BeerCritics")).toBeInTheDocument();
  });

  test("has all expected navigation links", () => {
    render(<MyNavbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Top Beers")).toBeInTheDocument();
    expect(screen.getByText("All Beers")).toBeInTheDocument();
    expect(screen.getByText("My Reviews")).toBeInTheDocument();
    expect(screen.getByText("My Account")).toBeInTheDocument();
  });
});
