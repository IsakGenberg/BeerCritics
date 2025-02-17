import { render } from "@testing-library/react";
import { Layout } from "../components/LayOut";


describe("Layout", () => {
    it("renders", () => {
        render(<Layout><h1>Hello</h1></Layout>)
    });
});