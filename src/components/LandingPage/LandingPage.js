import React from "react";
import { Background, GameControllerBox, GameLogo, HowToPlayButton, PlayButtonWrapper, PlayIcon } from "./LandingPage.style";

const LandingPage = () => {
    return (
        <Background>
            <GameControllerBox>
                <GameLogo />
                <PlayButtonWrapper>
                    <PlayIcon />
                </PlayButtonWrapper>
                <HowToPlayButton>
                    How to play
                </HowToPlayButton>
            </GameControllerBox>
        </Background>
    );
}

export { LandingPage };