import React from "react";
import { Header, Heart, LeftSection, Menu, RightSection, Title, Wrapper } from "./GameWindow.style";
import { useParams } from "react-router-dom";

const GameWindow = () => {
    const { category } = useParams();
    return (
        <Wrapper>
            <Header>
                <LeftSection>
                    <Menu />
                    <Title>{category}</Title>
                </LeftSection>
                <RightSection>
                    {/* <ProgressBar /> */}
                    <Heart />
                </RightSection>
            </Header>
        </Wrapper>
    )
};

export { GameWindow };