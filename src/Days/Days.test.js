import React from "react";
import { render } from "@testing-library/react";
import Days from "./Days.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the Days component correctly", () => {
    const { container } = render(<BrowserRouter>
        <Days />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});