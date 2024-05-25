import styled from "styled-components";
import backButton from "../../assets/icon-back.svg";
import { COLORS, TYPOGRAPHY } from "../../styles";

export const Wrapper = styled.div`
    padding: 80px;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.div`
    display: flex;
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

export const Title = styled.h1`
    font-size: ${TYPOGRAPHY.xl};
    background: linear-gradient(180deg, ${COLORS.BLUE.shade9}, ${COLORS.WHITE.shade1});
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    margin: 0 auto;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Card = styled.div`
    width: 384px;
    height: 550px;
    background: ${COLORS.WHITE.shade1};
    border-radius: 40px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const CardId = styled.div`
    font-size: ${TYPOGRAPHY.l};
    color: ${COLORS.BLUE.shade2};
`;

export const CardTitle = styled.div`
    font-size: ${TYPOGRAPHY.m};
    color: ${COLORS.BLUE.shade1};
    text-transform: uppercase;
`;

export const CardBody = styled.div`
    font-size: ${TYPOGRAPHY.body};
    color: ${COLORS.BLUE.shade10};
`;