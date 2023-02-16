import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import MyButton from "../../components/MyButton";

describe("<MyButton />", () => {
    it("Should render a button with the specified label", () => {
        const button = render(
            <MyButton label="test" dark={false} testId="test-btn" />
        );
        expect(button.getByText("test")).toBeDefined();
    });

    it("Should render a short dark button", () => {
        const button = render(
            <MyButton label="test" dark={true} testId="test-btn" />
        );
        const styles = window.getComputedStyle(
            button.queryByTestId("test-btn")
        );
        expect(styles.getPropertyValue("background-color")).toEqual("black");
        expect(styles.getPropertyValue("padding")).toEqual("0.75em 1.5em");
    });

    it("Should render a short light button", () => {
        const button = render(
            <MyButton label="test" dark={false} testId="test-btn" />
        );
        const styles = window.getComputedStyle(
            button.queryByTestId("test-btn")
        );
        expect(styles.getPropertyValue("background-color")).toEqual(
            "rgb(255, 206, 255)"
        );
        expect(styles.getPropertyValue("padding")).toEqual("0.75em 1.5em");
    });

    it("Should render a long dark button", () => {
        const button = render(
            <MyButton label="test" dark={true} long={true} testId="test-btn" />
        );
        const styles = window.getComputedStyle(
            button.queryByTestId("test-btn")
        );
        expect(styles.getPropertyValue("background-color")).toEqual("black");
        expect(styles.getPropertyValue("padding")).toEqual("0.75em 4em");
    });

    it("Should fire the passed function onclick", () => {
        const mockCallBack = jest.fn();
        const button = render(
            <MyButton label="test" onClick={mockCallBack} testId="test-btn" />
        );
        fireEvent.click(button.getByTestId("test-btn"));
        expect(mockCallBack).toHaveBeenCalledTimes(1);
    });
});
