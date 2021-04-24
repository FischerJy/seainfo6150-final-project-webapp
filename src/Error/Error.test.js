import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the Error component correctly", () => {
    const { container } = render(<BrowserRouter>
        <Error />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});