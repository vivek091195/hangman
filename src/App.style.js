import styled from "styled-components";
import background from "./assets/background-desktop.svg";

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