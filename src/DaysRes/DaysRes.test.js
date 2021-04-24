import React from "react";
import { render } from "@testing-library/react";
import DaysRes from "./DaysRes.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the DaysRes component correctly", () => {
    const { container } = render(<BrowserRouter>
        <DaysRes />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});