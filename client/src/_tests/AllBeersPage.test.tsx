import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import { Beer } from "../interfaces/beer";
import AllBeersPage from "../pages/allbeerspage/AllBeersPage";
jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("All Beers Page", () => {
    it("renders beers list", () => {
        const mockBeers: Beer[] = [
              { name: "IPA", rating: 4.5, brewery: "BrewDog", style: "Ale", abv: 6.5, imagePath: "/images/ipa.jpg" },
              { name: "Lager", rating: 4.0, brewery: "Heineken", style: "Lager", abv: 5.0, imagePath: "/images/lager.jpg" },
            ];
        
        mockedAxios.get.mockResolvedValueOnce({ data: mockBeers });

        const { container } = render(<AllBeersPage />)
        expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:8080/beer");
        expect(container.firstChild).toHaveClass("all-beers-page");
    });

    it("fails to get beers", () => {
        const mockResponse = null;
        mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

        const { container } = render(<AllBeersPage />)
        expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:8080/beer");
        expect(container.firstChild).toHaveClass("loading-state");
    });
})