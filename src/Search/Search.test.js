import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the Search component correctly", () => {
    const { container } = render(<BrowserRouter>
        <Search />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});