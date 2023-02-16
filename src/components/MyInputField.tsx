import React, { ChangeEvent, Dispatch } from "react";
import { SetStateAction } from "react";

interface InputFieldProps {
    type: string;
    name: string;
    setState?: Dispatch<SetStateAction<string>>;
    testId?: string;
}

export default function MyInputField(props: InputFieldProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.setState) {
            props.setState(e.target.value);
        }
    };

    return (
        <input
            type={props.type}
            name={props.name}
            data-testId={props.testId}
            size={50}
            height={10}
            style={{ fontSize: 15 }}
            onChange={handleChange}
        />
    );
}
