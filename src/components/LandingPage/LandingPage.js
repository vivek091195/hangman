import React from "react";
import { Background, Circle, HowToPlayButton, HowToPlayButtonText, Logo, PlayIcon, Rectangle } from "./LandingPage.style";

const LandingPage = () => {
    return (
        <Background>
            <Rectangle>
                <Logo />
                <Circle>
                    <PlayIcon />
                </Circle>
                <HowToPlayButton>
                    How to play
                </HowToPlayButton>
            </Rectangle>
        </Background>
    );
}

export { LandingPage };