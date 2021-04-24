import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form.jsx";
import { BrowserRouter } from "react-router-dom";



it("renders the Form component correctly", () => {
    const { container } = render(<BrowserRouter>
        <Form />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});