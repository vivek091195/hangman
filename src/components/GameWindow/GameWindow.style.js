import styled, { css } from 'styled-components';
import menu from '../../assets/icon-menu.svg';
import heart from '../../assets/icon-heart.svg';
import { COLORS, TYPOGRAPHY } from '../../styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 40px 80px;
`;

export const Header = styled.div`
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
  background: linear-gradient(
    180deg,
    ${COLORS.PINK.shade1},
    ${COLORS.BLUE.shade6}
  );
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: '';
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

export const Content = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const GuessWindow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Keyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: auto;
  justify-items: center;
`;

export const Key = styled.div`
  width: ${(props) => props.width || '109px'};
  height: ${(props) => props.width || '84px'};
  background: ${(props) => props.backgroundColor || COLORS.WHITE.shade1};
  border-radius: ${(props) => props.borderRadius || '24px'};
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.invisible ? 'hidden' : 'unset')};
  font-size: ${(props) => props.fontSize || TYPOGRAPHY.m};
  color: ${(props) => props.color || COLORS.BLUE.shade1};
  cursor: pointer;
  margin-left: 30px;
  margin-top: 30px;
  text-transform: uppercase;
  ${(props) =>
    props.additionalStyles &&
    css`
      box-shadow: 0 -3px 0 4px ${COLORS.BLUE.shade8},
        0 0 0 6px ${COLORS.BLUE.shade5};
    `}
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      * {
        pointer-events: none;
        cursor: none;
      }
    `};
`;
