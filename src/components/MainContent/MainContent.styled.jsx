import styled from 'styled-components';

export const MainContentContainer = styled.main`
  flex: 1;
  margin: 2rem;
  background-color: ${(p) => p.theme.mainBGColor};
  border-radius: 0.5rem;
  overflow: auto;
   @media (max-width: 768px) {
    margin: 16px;
  }
`;
