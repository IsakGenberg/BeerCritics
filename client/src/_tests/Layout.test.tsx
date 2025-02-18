import { render, screen } from "@testing-library/react";
import { Layout } from "../components/layout/Layout";

describe("Layout", () => {
  it("renders", () => {
    render(
      <Layout>
        <h1>Hello</h1>
      </Layout>
    );
  });

  it("renders footer and header", () => {
    render(
      <Layout>
        <h1>Hello</h1>
      </Layout>
    );
    const footer = screen.getByRole("contentinfo");
    const header = screen.getByRole("banner");
    expect(footer).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });
});
