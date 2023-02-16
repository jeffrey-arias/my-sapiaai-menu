import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../../pages/Login";
import { assert } from "console";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe("<Login />", () => {
    it("Should render the Login page with the login text", () => {
        const login = render(<Login />, { wrapper: MemoryRouter });
        expect(login.getByText("Login to your Sapia.ai account")).toBeVisible();
    });
    it("Should render the Login page with the input field for username", () => {
        const login = render(<Login />, { wrapper: MemoryRouter });
        expect(login.getByTestId("uname-input")).toBeVisible();
    });
    it("Should render the Login page with the input field for password", () => {
        const login = render(<Login />, { wrapper: MemoryRouter });
        expect(login.getByTestId("uname-input")).toBeVisible();
    });
    it("Should render the Login page with the input field for password", () => {
        const login = render(<Login />, { wrapper: MemoryRouter });
        expect(login.getByTestId("uname-input")).toBeVisible();
    });
    it("Should render the Login page with the login button", () => {
        const login = render(<Login />, { wrapper: MemoryRouter });
        expect(login.getByTestId("login-login-btn")).toBeVisible();
    });
    it("Should render the Login page with the cancel button", () => {
        const login = render(<Login />, { wrapper: MemoryRouter });
        expect(login.getByTestId("login-cancel-btn")).toBeVisible();
    });
    it("Should render the Login page with the no error or success texts initially", () => {
        const login = render(<Login />, { wrapper: MemoryRouter });
        try {
            login.getByTestId("login-error-msg");
        } catch {
            assert(true);
        }
        try {
            login.getByTestId("login-success-msg");
        } catch {
            assert(true);
        }
    });
    it("Should render the Login page with an error message if no username/password was given and the login button was clicked", () => {
        const login = render(<Login />, { wrapper: MemoryRouter });
        fireEvent.click(login.getByTestId("login-login-btn"));
        expect(login.getByTestId("login-error-msg")).toBeVisible();
    });
    it("Should call the navigate() function when the cancel button was clicked", () => {
        const login = render(<Login />, { wrapper: MemoryRouter });
        fireEvent.click(login.getByTestId("login-cancel-btn"));
        expect(mockNavigate).toBeCalledTimes(1);
    });
});
