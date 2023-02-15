import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    align-items: center;
    color: black;
    height: calc(100vh - 55px);
`;

export const SafeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #ffceff;
`;
