// TODO finish these tests when "useNavigate error" is fixed
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import { Beer } from "../interfaces/beer";
import AllBeersPage from "../pages/allbeerspage/AllBeersPage";
import { BrowserRouter } from "react-router";
jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("All Beers Page", () => {
  it("renders beers list", async () => {
    const mockBeers: Beer[] = [
      {
        name: "IPA",
        rating: 4.5,
        brewery: "BrewDog",
        style: "Ale",
        abv: 6.5,
        imagePath: "/images/ipa.jpg",
      },
      {
        name: "Lager",
        rating: 4.0,
        brewery: "Heineken",
        style: "Lager",
        abv: 5.0,
        imagePath: "/images/lager.jpg",
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: mockBeers });

    render(
      <BrowserRouter>
        <AllBeersPage />
      </BrowserRouter>
    );

    expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:8080/beer");
    await waitFor(() => {
        expect(screen.getByTestId("all-beers-page")).toBeInTheDocument();
      });
  });

  it("fails to get beers", async () => {
    const mockResponse : Beer[] = [];
    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    render(
        <BrowserRouter>
          <AllBeersPage />
        </BrowserRouter>
      );
    
    expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:8080/beer");
    await waitFor(() => {
        expect(screen.getByTestId("loading-state")).toBeInTheDocument();
      });  });
});
