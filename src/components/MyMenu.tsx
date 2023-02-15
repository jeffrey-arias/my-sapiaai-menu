import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

export default function MyMenu() {
    const navigate = useNavigate();

    const handleNavigateToLogin = () => {
        navigate("/login");
    };

    return (
        <div data-testId="menu-link">
            <MyButton
                dark={true}
                onClick={handleNavigateToLogin}
                label="Login"
                testId="login-btn"
            />
            <MyButton
                dark={false}
                onClick={() => window.open("https://sapia.ai/book-demo/")}
                label="Book Demo"
                testId="demo-btn"
            />
            <MyButton
                dark={false}
                onClick={() =>
                    window.open("https://sapia.ai/candidate-explainer/")
                }
                label="Candidate Support"
                testId="support-btn"
            />
        </div>
    );
}
