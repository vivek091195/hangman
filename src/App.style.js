import styled from "styled-components";
import background from "./assets/background-desktop.svg";
import { COLORS } from "./styles";
import backButton from "./assets/icon-back.svg";

export const Background = styled.div`
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BackButton = styled.div`
    width: 94px;
    height: 94px;
    border-radius: 50%;
    background: linear-gradient(180deg, ${COLORS.PINK.shade1}, ${COLORS.BLUE.shade6});
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:after {
        content: "";
        position: absolute;
        width: 41px;
        height: 38px;
        background: url(${backButton});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`;