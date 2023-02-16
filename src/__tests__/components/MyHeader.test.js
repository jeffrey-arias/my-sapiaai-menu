import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MyHeader from "../../components/MyHeader";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));

describe("<MyHeader />", () => {
    it("Should render a link to the home page", () => {
        const header = render(<MyHeader />, { wrapper: MemoryRouter });
        expect(header.getByTestId("home-link")).toBeVisible();
    });
    it("Should render a link to the menu group", () => {
        const header = render(<MyHeader />, { wrapper: MemoryRouter });
        expect(header.getByTestId("menu-link")).toBeVisible();
    });
});
