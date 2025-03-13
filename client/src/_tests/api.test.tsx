import { getAllBeers, getBeer, registerNewUser } from "../api";
import axios from "axios";
import { Beer } from "../interfaces/beer";
jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Client-side API", () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("getAllBeers should fetch and return beer data", async () => {
    const mockBeers: Beer[] = [
      { name: "IPA", rating: 4.5, brewery: "BrewDog", style: "Ale", abv: 6.5, imagePath: "/images/ipa.jpg" },
      { name: "Lager", rating: 4.0, brewery: "Heineken", style: "Lager", abv: 5.0, imagePath: "/images/lager.jpg" },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: mockBeers });

    const result = await getAllBeers();

    expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:8080/beer");
    expect(result).toEqual(mockBeers);
  });

  test("getBeer should fetch and return a single beer", async () => {
    const mockBeer: Beer = { name: "Stout", rating: 4.8, brewery: "Guinness", style: "Ale", abv: 7.2, imagePath: "/images/stout.jpg" };

    mockedAxios.get.mockResolvedValueOnce({ data: mockBeer });

    const result = await getBeer("Stout");

    expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:8080/beer/Stout");
    expect(result).toEqual(mockBeer);
  });

  test("registerNewUser should call API with correct payload", async () => {
    mockedAxios.post.mockResolvedValueOnce({});

    await registerNewUser("testUser", "securePassword");

    expect(mockedAxios.post).toHaveBeenCalledWith("http://localhost:8080/user", {
      username: "testUser",
      password: "securePassword",
    });
  });

  test("registerNewUser should handle API errors gracefully", async () => {
    mockedAxios.post.mockRejectedValueOnce(new Error("API error"));

    await expect(registerNewUser("failUser", "failPassword")).rejects.toThrow("API error");
  });
});