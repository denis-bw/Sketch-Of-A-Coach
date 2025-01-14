import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  /* background-color: ${({ theme }) => theme.mainBGColor}; */
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const ThemeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease, opacity 0.5s ease;
  transform: ${({ $isDarkMode }) => ($isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)')};
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? 1 : 0.8)};
  &:hover {
    transform: scale(1.2) ${({ $isDarkMode }) => ($isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const BurgerButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;