import React from "react";
import { render } from "@testing-library/react";
import HisDetail from "./HisDetail.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the HisDetail component correctly", () => {
    const { container } = render(<BrowserRouter>
        <HisDetail />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});