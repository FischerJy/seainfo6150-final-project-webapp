import React from "react";
import { render } from "@testing-library/react";
import SearchRes from "./SearchRes.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the SearchRes component correctly", () => {
    const { container } = render(<BrowserRouter>
        <SearchRes />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});