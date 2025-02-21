import { getAllBeers, getBeer } from "../api";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Get all beers", () => {
  it("success", async () => {
    const mockResponse = {
      data: [
        {
          name: "Heineken",
          rating: 4,
          brewery: "Stockholm brewery",
          style: "Lager",
          abv: 5,
          imagePath: "/heineken.png",
        },
        {
          name: "Corona",
          rating: 3,
          brewery: "Stockholm brewery",
          style: "Mexian Beer",
          abv: 2,
          imagePath: "/corona.png",
        },
      ],
    };
    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const beer = await getAllBeers();

    expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:8080/beer");
    expect(beer).toEqual(mockResponse.data);
  });
});

describe("Get specific beer", () => {
  it("Successfully get beer by name", async () => {
    const mockResponse = {
      data: [
        {
          name: "Heineken",
          rating: 4,
          brewery: "Stockholm brewery",
          style: "Lager",
          abv: 5,
          imagePath: "/heineken.png",
        },
      ],
    };
    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const beer = await getBeer("Heineken");

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "http://localhost:8080/beer/Heineken"
    );

    expect(beer).toEqual(mockResponse.data);
  });

  it("Get beer that does not exist", async () => {
    const mockResponse = {
      data: null
    };
    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const beer = await getBeer("Corona");

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "http://localhost:8080/beer/Corona"
    );

    expect(beer).toBeNull();
  });
});
