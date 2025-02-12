// TODO write test for links to see if they lead to the correct path?
import Footer from "../components/Footer";
import { render} from '@testing-library/react';

describe("Footer", () => {
    it("renders correctly", () => {
        render(<Footer/>);
    });
})
