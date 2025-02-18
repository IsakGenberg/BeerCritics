import MyNavbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { ReactNode } from "react";
import "./Layout.css";

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
