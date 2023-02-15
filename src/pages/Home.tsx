import React from "react";
import MyHeader from "../components/MyHeader";
import { Container, SafeContainer } from "../styles/container";
import { Break, HeaderText, SubheaderText, TextGroup } from "../styles/text";

export default function Home() {
    return (
        <SafeContainer>
            <MyHeader />
            <Container>
                <TextGroup>
                    <HeaderText> Welcome to Sapia.AI</HeaderText>
                    <Break />
                    <SubheaderText>
                        AI. Chat. Interviewing. It’s the no-resume enterprise
                        solution.
                    </SubheaderText>
                </TextGroup>
            </Container>
        </SafeContainer>
    );
}
