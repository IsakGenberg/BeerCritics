import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import HomePage from "./components/HomePage.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

//import SearchBar from "./components/SearchBar.tsx";
import Footer from "./components/Footer.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import BeerPage from "./pages/BeerPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MyNavbar />
      <HomePage />
      <Footer />
      <Layout>
        <Routes>
          <Route path="/beer/:name" element={<BeerPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
