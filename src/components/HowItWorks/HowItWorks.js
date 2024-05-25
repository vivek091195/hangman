import React from "react";
import { BackButton, Content, Header, Title, Wrapper, CardId, CardTitle, CardBody, Card } from "./HowItWorks.style";
import { useAppContext } from "../../hooks/AppHook";

const INSTRUCTIONS_CARDS = [
    {
        id: "01",
        title: "Choose a category",
        body: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
    },
    {
        id: "02",
        title: "Guess letters",
        body: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."
    },
    {
        id: "03",
        title: "Win or lose",
        body: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."
    }
];

const HowItWorks = () => {
    const { backClickHandler } = useAppContext();
    return (
        <Wrapper>
            <Header>
                <BackButton onClick={backClickHandler} />
                <Title>How to Play</Title>
            </Header>
            <Content>
                {
                    INSTRUCTIONS_CARDS.map(({ id, title, body }) => (
                        <Card>
                            <CardId>{id}</CardId>
                            <CardTitle>{title}</CardTitle>
                            <CardBody>{body}</CardBody>
                        </Card>
                    ))
                }
            </Content>
        </Wrapper>
    );
}

export { HowItWorks };