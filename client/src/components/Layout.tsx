import MyNavbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/layout.css";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="layout">
        <header className="layout-header">
          <MyNavbar />
        </header>
        <main className="content">{children}</main>
        <footer className="layout-footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
