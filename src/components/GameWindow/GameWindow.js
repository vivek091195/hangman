import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../hooks/AppHook";
import { Content, GuessWindow, Header, Heart, Key, Keyboard, LeftSection, Menu, RightSection, Title, Wrapper } from "./GameWindow.style";
import { COLORS, TYPOGRAPHY } from "../../styles";

const TOTAL_KEYBOARD_ALPHABETS = 26;
const GameWindow = () => {
    const { category } = useParams();
    const { randomCategoryPickerHandler } = useAppContext();
    const word = randomCategoryPickerHandler(category);

    return (
        <Wrapper>
            <Header>
                <LeftSection>
                    <Menu />
                    <Title>{category}</Title>
                </LeftSection>
                <RightSection>
                    <Heart />
                </RightSection>
            </Header>
            <Content>
                <GuessWindow>
                    <Key width={"112px"} height={"128px"} borderRadius={"40px"} backgroundColor={COLORS.BLUE.shade2} fontSize={TYPOGRAPHY.l} color={COLORS.WHITE.shade1} additionalStyles>A</Key>
                </GuessWindow>
                <Keyboard>
                    {
                        Array.from({ length: TOTAL_KEYBOARD_ALPHABETS }).map((_, i) => <Key>{String.fromCharCode(65 + i)}</Key>)
                    }
                </Keyboard>
            </Content>
        </Wrapper>
    )
};

export { GameWindow };