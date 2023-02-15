import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MyMenu from "../../components/MyMenu";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));

describe("<MyMenu />", () => {
    it("Should render a button with a link to the login page", () => {
        const menu = render(<MyMenu />, { wrapper: MemoryRouter });
        expect(menu.getByTestId("login-btn")).toBeVisible();
    });

    it("Should render a button with a link to the demo page", () => {
        const menu = render(<MyMenu />, { wrapper: MemoryRouter });
        expect(menu.getByTestId("demo-btn")).toBeVisible();
    });

    it("Should render a button with a link to the support page", () => {
        const menu = render(<MyMenu />, { wrapper: MemoryRouter });
        expect(menu.getByTestId("support-btn")).toBeVisible();
    });
});
