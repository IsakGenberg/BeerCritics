import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import SearchBar from "./components/SearchBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyNavbar />
    <SearchBar />
  </StrictMode>
);
