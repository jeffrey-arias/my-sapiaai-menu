import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import MyInputField from "../components/MyInputField";
import { ButtonGroup } from "../styles/button";
import { Container, SafeContainer } from "../styles/container";
import {
    Break,
    ErrorText,
    HeaderText,
    InputFieldGroup,
    LabelText,
    SuccessText,
    TextGroup,
} from "../styles/text";
import { loginApiCall } from "../utils/api";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [hasError, setHasError] = useState<boolean | undefined>(undefined);
    const [errorMessage, setErrorMessage] = useState("");
    const handleCancel = () => {
        navigate(-1);
    };

    const handleLogin = async () => {
        if (username.trim().length > 0 && password.trim().length > 0) {
            const response = await loginApiCall(username, password);

            if (response.result === "FAILED") {
                setHasError(true);
                setErrorMessage(
                    "Login has FAILED. Please check your username and/or password."
                );
            } else if (response.result === "SUCCESS") {
                setHasError(false);
            }
        } else {
            setHasError(true);
            setErrorMessage("Username and/or password can't be blank.");
        }
    };

    return (
        <SafeContainer>
            <MyHeader />
            <Container>
                <div>
                    <HeaderText> Login to your Sapia.ai account</HeaderText>
                    <Break />
                    <TextGroup style={{ marginTop: "5em" }}>
                        <InputFieldGroup>
                            <LabelText>Username: </LabelText>
                            <MyInputField
                                type="text"
                                name="username"
                                setState={setUsername}
                                testId="uname-input"
                            />
                        </InputFieldGroup>
                        <Break />
                        <InputFieldGroup>
                            <LabelText>Password: </LabelText>
                            <MyInputField
                                type="password"
                                name="password"
                                setState={setPassword}
                                testId="password-input"
                            />
                        </InputFieldGroup>
                    </TextGroup>
                    <TextGroup style={{ marginTop: "2em" }}>
                        {hasError && (
                            <ErrorText data-testId="login-error-msg">
                                {errorMessage}
                            </ErrorText>
                        )}
                        {hasError != null && !hasError && (
                            <SuccessText data-testId="login-success-msg">
                                Login was SUCCESSFUL! Welcome, {username}!
                            </SuccessText>
                        )}
                    </TextGroup>
                    <ButtonGroup style={{ marginTop: "5em" }}>
                        <MyButton
                            dark={true}
                            long={true}
                            onClick={handleLogin}
                            label="Login"
                            testId="login-login-btn"
                        />
                        <MyButton
                            dark={true}
                            long={true}
                            onClick={handleCancel}
                            label="Cancel"
                            testId="login-cancel-btn"
                        />
                    </ButtonGroup>
                </div>
            </Container>
        </SafeContainer>
    );
}
