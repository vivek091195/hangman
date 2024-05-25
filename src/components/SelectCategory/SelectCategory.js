import React from "react";
import { Card, CardContainer, CardTitle, Cards, Wrapper } from "./SelectCategory.style";
import { PageTitle } from "../PageTitle/PageTitle";
import { CATEGORIES } from "../../constants";

const SelectCategory = () => {
    return (
        <Wrapper>
            <PageTitle title={"Pick a Category"} />
            <CardContainer>
                <Cards>
                    {
                        Object.values(CATEGORIES).map(value => (
                            <Card>
                                <CardTitle>{value}</CardTitle>
                            </Card>
                        ))
                    }
                </Cards>
            </CardContainer>
        </Wrapper>
    );
}

export { SelectCategory };