import React from "react";
import { render } from "@testing-library/react";
import Citys from "./Citys.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the Citys component correctly", () => {
    const { container } = render(<BrowserRouter>
        <Citys />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});