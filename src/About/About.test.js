import React from "react";
import { render } from "@testing-library/react";
import About from "./About.jsx";



it("renders the About component correctly", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
});