// components/MainContent.styled.js
import styled from 'styled-components';

export const MainContentContainer = styled.main`
  flex: 1;
  margin: 2rem;
  background-color: ${(p) => p.theme.mainBGColor};
  border-radius: 0.5rem;
  overflow: auto;
`;
