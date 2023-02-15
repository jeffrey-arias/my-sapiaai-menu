import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../styles/header";
import { SapiaLink } from "../styles/link";
import MyMenu from "./MyMenu";

export default function MyHeader() {
    return (
        <Header>
            <Link to="/">
                <SapiaLink data-testid="home-link" />
            </Link>
            <MyMenu />
        </Header>
    );
}
