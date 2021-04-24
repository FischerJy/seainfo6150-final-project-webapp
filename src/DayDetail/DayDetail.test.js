import React from "react";
import { render } from "@testing-library/react";
import DayDetail from "./DayDetail.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the DayDetail component correctly", () => {
    const { container } = render(<BrowserRouter>
        <DayDetail />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});