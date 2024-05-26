import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import playIcon from '../../assets/icon-play.svg';
import { COLORS, TYPOGRAPHY } from '../../styles';

export const GameControllerBox = styled.div`
  width: 592px;
  height: 500px;
  background: linear-gradient(
    180deg,
    ${COLORS.BLUE.shade3},
    ${COLORS.BLUE.shade4}
  );
  box-shadow: 0 8px 0 4px ${COLORS.BLUE.shade5},
    inset 0 8px 0 2px ${COLORS.BLUE.shade2};
  border-radius: 72px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export const GameLogo = styled.div`
  width: 374px;
  height: 185px;
  background: url(${logo});
  position: absolute;
  left: 50%;
  top: -20%;
  transform: translateX(-50%);
`;

export const PlayButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: linear-gradient(${COLORS.PINK.shade1}, ${COLORS.BLUE.shade6});
  border-radius: 50%;
  box-shadow: 0 4px 0 5px ${COLORS.BLUE.shade7},
    inset 0 -8px 0 6px ${COLORS.PINK.shade2};
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:after {
    content: '';
    position: absolute;
    width: 66px;
    height: 62px;
    background-image: url(${playIcon});
  }
`;

export const HowToPlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 62px;
  border-radius: 40px;
  cursor: pointer;
  background-color: ${COLORS.BLUE.shade2};
  box-shadow: 0 2px 0 3px ${COLORS.BLUE.shade5},
    inset 0 4px 0 3px ${COLORS.BLUE.shade8};
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
  color: ${COLORS.WHITE.shade1};
  text-transform: uppercase;
  font-size: ${TYPOGRAPHY.s};
`;
