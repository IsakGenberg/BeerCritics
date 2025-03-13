// TODO write test for links to see if they lead to the correct path?
import { AuthProvider } from "../authprovider";
import Footer from "../components/footer/Footer";
import { render } from "@testing-library/react";

describe("Footer", () => {
  it("renders correctly", () => {
    render(
      <AuthProvider>
        <Footer />
      </AuthProvider>
    );
  });
});
