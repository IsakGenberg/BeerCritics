import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import Footer from './components/Footer.tsx'
import HomePage from "./components/HomePage.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyNavbar />
    <HomePage/>
    <Footer/>
  </StrictMode>,
)
