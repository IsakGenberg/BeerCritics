import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Review from "./components/Review.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Review rating={3} author="Anonymous" comment="Default comment" />
    <Review rating={5} author="Irre" comment="Royal är gott" />
  </StrictMode>
);
