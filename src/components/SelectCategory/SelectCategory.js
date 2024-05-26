import React from "react";
import { Card, CardContainer, CardTitle, Cards, Wrapper } from "./SelectCategory.style";
import { PageTitle } from "../PageTitle/PageTitle";
import { CATEGORIES } from "../../constants";
import { useAppContext } from "../../hooks/AppHook";

const SelectCategory = () => {
    const { categoryClickHandler } = useAppContext();
    return (
        <Wrapper>
            <PageTitle title={"Pick a Category"} />
            <CardContainer>
                <Cards>
                    {
                        CATEGORIES.map(({ id, title }) => (
                            <Card key={id} onClick={() => categoryClickHandler(id)}>
                                <CardTitle>{title}</CardTitle>
                            </Card>
                        ))
                    }
                </Cards>
            </CardContainer>
        </Wrapper>
    );
}

export { SelectCategory };