import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/Home";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));

describe("<Home />", () => {
    it("Should render the Home page with the header and subheader texts", () => {
        const header = render(<Home />, { wrapper: MemoryRouter });
        expect(header.getByText("Welcome to Sapia.AI")).toBeVisible();
        expect(
            header.getByText(
                "AI. Chat. Interviewing. It’s the no-resume enterprise solution."
            )
        ).toBeVisible();
    });
});
