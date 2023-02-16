import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import MyInputField from "../../components/MyInputField";
import userEvent from "@testing-library/user-event";

describe("<MyInputField />", () => {
    it("Should render an input field", () => {
        const input = render(
            <MyInputField type="text" name="input" testId="input-test" />
        );
        expect(input.getByTestId("input-test")).toBeVisible();
    });
    it("Should render an input field of type 'textbox'", () => {
        const { getByRole } = render(
            <MyInputField ype="text" name="input" testId="input-test" />
        );
        expect(getByRole("textbox")).toBeVisible();
    });
    it("Should call setState props for each letter in test input text", () => {
        const mockedSetState = jest.fn();
        const textToType = "Hello, World!";
        const { getByRole } = render(
            <MyInputField
                type="text"
                name="input"
                testId="input-test"
                setState={mockedSetState}
            />
        );
        userEvent.type(getByRole("textbox"), textToType);
        expect(mockedSetState).toHaveBeenCalledTimes(textToType.length);
    });
});
