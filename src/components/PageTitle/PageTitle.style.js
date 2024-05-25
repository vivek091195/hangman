import styled from "styled-components";
import { COLORS, TYPOGRAPHY } from "../../styles";

export const Header = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: ${TYPOGRAPHY.xl};
    background: linear-gradient(180deg, ${COLORS.BLUE.shade9}, ${COLORS.WHITE.shade1});
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    margin: 0 auto;
`;