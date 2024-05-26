import React from 'react';
import { useAppContext } from '../../hooks/AppHook';
import {
  GameControllerBox,
  GameLogo,
  HowToPlayButton,
  PlayButtonWrapper
} from './LandingPage.style';

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
};

export { LandingPage };
