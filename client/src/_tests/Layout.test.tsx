import { render, screen } from "@testing-library/react";
import { Layout } from "../components/layout/Layout";
import { AuthProvider } from "../authprovider";

describe("Layout", () => {
  it("renders", () => {
    render(
      <AuthProvider>
        <Layout>
          <h1>Hello</h1>
        </Layout>
      </AuthProvider>
    );
  });

  it("renders footer and header", () => {
    render(
      <AuthProvider>
        <Layout>
          <h1>Hello</h1>
        </Layout>
      </AuthProvider>
    );
    const footer = screen.getByRole("contentinfo");
    const header = screen.getByRole("banner");
    expect(footer).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });
});
