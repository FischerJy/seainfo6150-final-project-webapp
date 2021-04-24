import React from "react";
import { render } from "@testing-library/react";
import HistorySearch from "./HistorySearch.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the HistorySearch component correctly", () => {
    const { container } = render(<BrowserRouter>
        <HistorySearch />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});