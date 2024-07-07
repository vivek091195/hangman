import React, { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../hooks/AppHook';
import {
  Content,
  GuessWindow,
  Header,
  Heart,
  Key,
  Keyboard,
  LeftSection,
  Menu,
  RightSection,
  Title,
  Wrapper
} from './GameWindow.style';
import { COLORS, TYPOGRAPHY } from '../../styles';
import { Keys } from '../Keys/Keys';

const TOTAL_KEYBOARD_ALPHABETS = 26;
const SPECIAL_CHARACTER_REGEX = /[^a-zA-Z0-9]/;
const HIDING_PERCENTAGE = 0.3;

const GameWindow = () => {
  const { category } = useParams();
  const { randomCategoryPickerHandler, generateRandomNumbers } =
    useAppContext();
  const word = randomCategoryPickerHandler(category);
  const numberOfCharsToHide = Math.ceil(HIDING_PERCENTAGE * word.length);
  const randomIndices = useMemo(
    () => generateRandomNumbers(0, word.length, numberOfCharsToHide),
    [word]
  );
  console.log(randomIndices);

  return (
    <Wrapper>
      <Header>
        <LeftSection>
          <Menu />
          <Title>{category}</Title>
        </LeftSection>
        <RightSection>
          <Heart />
        </RightSection>
      </Header>
      <Content>
        <GuessWindow>
          {word.split('').map((ch, index) => {
            const isDisabledCharacter = randomIndices.indexOf(index) > -1;
            return (
              <Key
                width={'112px'}
                height={'128px'}
                borderRadius={'40px'}
                backgroundColor={
                  isDisabledCharacter ? COLORS.BLUE.shade1 : COLORS.BLUE.shade2
                }
                fontSize={TYPOGRAPHY.l}
                color={
                  isDisabledCharacter ? COLORS.BLUE.shade1 : COLORS.WHITE.shade1
                }
                disabled={isDisabledCharacter}
                invisible={ch === ' '}
                hide={ch !== ' ' && SPECIAL_CHARACTER_REGEX.test(ch)}
                additionalStyles
              >
                {ch}
              </Key>
            );
          })}
        </GuessWindow>
        <Keyboard>
          {Array.from({ length: TOTAL_KEYBOARD_ALPHABETS }).map((_, i) => (
            <Keys char={String.fromCharCode(65 + i)} />
          ))}
        </Keyboard>
      </Content>
    </Wrapper>
  );
};

export { GameWindow };
