import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import MyNavbar from "../components/navbar/Navbar";
import axios from "axios";
import { AuthProvider } from "../authprovider";
import { BrowserRouter } from "react-router";
jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("MyNavbar Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the Navbar component", async () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <MyNavbar />
        </BrowserRouter>
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });
  });

  test("displays the correct brand name", async () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <MyNavbar />
        </BrowserRouter>
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("BeerCritics")).toBeInTheDocument();
    });
  });

  test("has all expected navigation links, when logged out", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: null });

    render(
      <AuthProvider>
        <BrowserRouter>
          <MyNavbar />
        </BrowserRouter>
      </AuthProvider>
    );

    
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:8080/user");
      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Top Beers")).toBeInTheDocument();
      expect(screen.getByText("All Beers")).toBeInTheDocument();
      expect(screen.getByText("Register Account")).toBeInTheDocument();
      expect(screen.getByText("Login")).toBeInTheDocument();
    });
  });

  test("has all expected navigation links, when logged in", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: "exampleuser" });

    render(
      <AuthProvider>
        <BrowserRouter>
          <MyNavbar />
        </BrowserRouter>
      </AuthProvider>
    );

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:8080/user");
      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Top Beers")).toBeInTheDocument();
      expect(screen.getByText("All Beers")).toBeInTheDocument();
      expect(screen.getByText("My Reviews")).toBeInTheDocument();
      expect(screen.getByText("My Account")).toBeInTheDocument();
    });
  });
});
