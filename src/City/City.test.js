import React from "react";
import { render } from "@testing-library/react";
import City from "./City.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the City component correctly", () => {
    const { container } = render(<BrowserRouter>
        <City />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});