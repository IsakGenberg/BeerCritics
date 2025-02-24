import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";
import BeerPage from "./pages/beerpage/BeerPage.tsx";
import AllBeersPage from "./pages/allbeerspage/AllBeersPage.tsx";

import LoginPage from "./pages/loginpage/LoginPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/beer/:name" element={<BeerPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/allbeers" element={<AllBeersPage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
