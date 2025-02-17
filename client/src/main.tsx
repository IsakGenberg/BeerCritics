import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import SearchBar from "./components/SearchBar.tsx";
import Review from "./components/Review.tsx";
import BeerCard from "./components/BeerCard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyNavbar />
    <SearchBar />
    <Review rating={4} author="John Doe" comment="Great beer!" date={new Date("2023-10-01")} />
    <BeerCard imagePath="birramoretti.png"name="Birra Moretti" brewery="Heineken Italia" style="Öl, Ljus lager, Italiensk" abv={5.5} rating={4} numReviewers={52} />
  </StrictMode>
);
