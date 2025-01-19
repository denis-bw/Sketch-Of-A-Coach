import React from 'react';
import { MainContentContainer } from './MainContent.styled';

const MainContent = ({ children }) => {
  return <MainContentContainer>{children}</MainContentContainer>;
};

export default MainContent;
