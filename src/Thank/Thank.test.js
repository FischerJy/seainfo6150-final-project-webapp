import React from "react";
import { render } from "@testing-library/react";
import Thank from "./Thank.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the Thank component correctly", () => {
    const { container } = render(<BrowserRouter>
        <Thank />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});