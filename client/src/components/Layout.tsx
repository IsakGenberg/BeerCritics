import MyNavbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
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

import MyNavbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import "../styles/Layout.css";

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
