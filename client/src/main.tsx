import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import SearchBar from "./components/SearchBar.tsx";
import Footer from "./components/Footer.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeerPage from "./pages/BeerPage";
import AddReviewButton from "./components/AddReviewButton.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/beer/:name" element={<BeerPage />} />
      </Routes>
      <AddReviewButton />
    </BrowserRouter>
  </StrictMode>
);
