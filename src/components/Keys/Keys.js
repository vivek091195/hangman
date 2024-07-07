import React, { useState } from 'react';
import { Key } from '../GameWindow/GameWindow.style';

const Keys = ({ char }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Key disabled={isClicked} onClick={() => setIsClicked(true)}>
      {char}
    </Key>
  );
};

export { Keys };
