import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import SearchBar from "./components/SearchBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchBar />
  </StrictMode>
);
