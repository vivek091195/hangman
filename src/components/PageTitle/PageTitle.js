import React from 'react';
import { Header, Title } from './PageTitle.style';
import { BackButton } from '../../App.style';
import { useAppContext } from '../../hooks/AppHook';

const PageTitle = ({ title }) => {
  const { backClickHandler } = useAppContext();
  return (
    <Header>
      <BackButton onClick={backClickHandler} />
      <Title>{title}</Title>
    </Header>
  );
};

export { PageTitle };
