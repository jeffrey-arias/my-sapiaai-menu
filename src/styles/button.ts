import styled from "styled-components";

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LightButton = styled.button`
    background-color: #ffceff;
    border-radius: 20px;
    border: none;
    color: black;
    margin: 0 1em;
    padding: 0.75em 1.5em;
    &:hover {
        background-color: #FF99EA
        ;
    }
    cursor: pointer;
    font-family: "Open Sans",sans-serif;
    font-size: 1rem;
`;

export const DarkButton = styled.button`
    background-color: black;
    border-radius: 20px;
    border: none;
    color: #ffceff;
    margin: 0 1em;
    padding: 0.75em 1.5em;
    &:hover {
        color: white;
    }
    cursor: pointer;
    font-family: "Open Sans",sans-serif;
    font-size: 1rem;
`;

export const DarkLongButton = styled.button`
    background-color: black;
    border-radius: 20px;
    border: none;
    color: #ffceff;
    padding: 0.75em 4em;
    &:hover {
        color: white;
    }
    cursor: pointer;
    font-family: "Open Sans",sans-serif;
    font-size: 1rem;
`;