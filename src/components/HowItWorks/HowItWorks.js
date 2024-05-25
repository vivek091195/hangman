import React from "react";
import { Content, Wrapper, CardId, CardTitle, CardBody, Card } from "./HowItWorks.style";
import { PageTitle } from "../PageTitle/PageTitle";
import { INSTRUCTIONS_CARDS } from "../../constants";

const HowItWorks = () => {
    return (
        <Wrapper>
            <PageTitle title="How to Play" />
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