import React from "react";
import { render } from "@testing-library/react";
import MinutesDetail from "./MinutesDetail.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the MinutesDetail component correctly", () => {
    const { container } = render(<BrowserRouter>
        <MinutesDetail />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});