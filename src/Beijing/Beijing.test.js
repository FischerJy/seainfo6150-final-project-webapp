import React from "react";
import { render } from "@testing-library/react";
import Beijing from "./Beijing.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the Beijing component correctly", () => {
    const { container } = render(<BrowserRouter>
        <Beijing />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});