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
import RegisterPage from "./pages/registerpage/RegisterPage.tsx";
import MyReviewsPage from "./pages/myreviews/MyReviewsPage.tsx";
import { AuthProvider } from "./authprovider.tsx";
import MyAccountPage from "./pages/myaccountpage/MyAccountPage.tsx";
import TopBeerPage from "./pages/topbeerspage/TopBeerPage.tsx";

/**
 * Main component of the application which sets up the routing for the different pages
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/beer/:name" element={<BeerPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/topbeers" element={<TopBeerPage />} />
            <Route path="/user/login" element={<LoginPage />} />
            <Route path="/user/register" element={<RegisterPage />} />
            <Route path="/user/myreviews" element={<MyReviewsPage />} />
            <Route path="/user/account" element={<MyAccountPage />} />
            <Route path="/allbeers" element={<AllBeersPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
