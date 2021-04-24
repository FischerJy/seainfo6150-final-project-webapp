import React from "react";
import { render } from "@testing-library/react";
import HoursDetail from "./HoursDetail.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the HoursDetail component correctly", () => {
    const { container } = render(<BrowserRouter>
        <HoursDetail />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});