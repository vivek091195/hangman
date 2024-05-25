import React from "react";
import { useAppContext } from "../../hooks/AppHook";
import { Background, GameControllerBox, GameLogo, HowToPlayButton, PlayButtonWrapper, PlayIcon } from "./LandingPage.style";

const LandingPage = () => {
    const { howItWorksClickHandler, playClickHandler } = useAppContext();
    return (
        <GameControllerBox>
            <GameLogo />
            <PlayButtonWrapper onClick={playClickHandler} />
            <HowToPlayButton onClick={howItWorksClickHandler}>
                How to play
            </HowToPlayButton>
        </GameControllerBox>
    );
}

export { LandingPage };