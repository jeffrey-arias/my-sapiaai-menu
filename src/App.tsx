import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <div className="root">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
