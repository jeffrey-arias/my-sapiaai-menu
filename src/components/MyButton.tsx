import React from "react";
import { LightButton, DarkButton, DarkLongButton } from "../styles/button";

interface MyButtonProps {
    label: string;
    dark: boolean;
    long?: boolean;
    onClick?: () => void;
    testId?: string;
}
export default function MyButton(props: MyButtonProps) {
    const handleClick: React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
    > = (e) => {
        if (props.onClick) {
            props.onClick();
        }
    };

    if (props.dark === true) {
        if (props.long === true) {
            return (
                <DarkLongButton
                    onClick={handleClick}
                    data-testId={props.testId}
                >
                    {props.label}
                </DarkLongButton>
            );
        } else {
            return (
                <DarkButton onClick={handleClick} data-testId={props.testId}>
                    {props.label}
                </DarkButton>
            );
        }
    } else {
        return (
            <LightButton onClick={handleClick} data-testId={props.testId}>
                {props.label}
            </LightButton>
        );
    }
}
