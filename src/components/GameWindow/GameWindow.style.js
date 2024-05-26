import styled from "styled-components";
import menu from "../../assets/icon-menu.svg";
import heart from "../../assets/icon-heart.svg";
import { COLORS, TYPOGRAPHY } from "../../styles";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Header = styled.div`
    padding: 60px 80px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export const LeftSection = styled.div`
    display: flex;
`;

export const Menu = styled.div`
    width: 94px;
    height: 94px;
    border-radius: 50%;
    background: linear-gradient(180deg, ${COLORS.PINK.shade1}, ${COLORS.BLUE.shade6});
    display: flex;
    justify-content: center;
    align-items: center;

    &:after {
        content: "";
        position: absolute;
        background: url(${menu});
        width: 38px;
        height: 32px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`;


export const Heart = styled.div`
    width: 53px;
    height: 49px;
    background: url(${heart});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Title = styled.div`
    font-size: ${TYPOGRAPHY.l};
    color: ${COLORS.WHITE.shade1};
    margin-left: 60px;
`;

export const RightSection = styled.div``;