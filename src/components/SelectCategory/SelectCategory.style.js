import styled from "styled-components";
import { COLORS, TYPOGRAPHY } from "../../styles";

export const Wrapper = styled.div`
    padding: 80px;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Cards = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 60px;
    column-gap: 50px;
`;

export const Card = styled.div`
    width: 384px;
    height: 190px;
    border-radius: 40px;
    background: ${COLORS.BLUE.shade2};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 0 0 5px ${COLORS.BLUE.shade8}, 0 1px 0 8px ${COLORS.BLUE.shade5};
`;

export const CardTitle = styled.div`
    font-size: ${TYPOGRAPHY.m};
    color: ${COLORS.WHITE.shade1};
    text-transform: uppercase;
`;