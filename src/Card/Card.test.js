import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card.jsx";
import { BrowserRouter } from "react-router-dom";

var obj = {
    wind: {},
    coord: { lat: '', lon: '' },
    main: {},
    weather: [{}],
}

it("renders the Card component correctly", () => {
    const { container } = render(<BrowserRouter>
        <Card {...obj} />
    </BrowserRouter>);
    expect(container).toMatchSnapshot();
});