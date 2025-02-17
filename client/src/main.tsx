import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import SearchBar from "./components/SearchBar.tsx";
import Footer from './components/Footer.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Layout } from "./components/LayOut.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <h1>This is how it is used</h1>
      <p>Replace this with other things</p>
    </Layout>
  </StrictMode>,
)
