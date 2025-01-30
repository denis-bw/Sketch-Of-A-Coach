import styled from 'styled-components';
import { ReactComponent as OriginalMoonIcon } from '../../assets/MoonIcon.svg';
import { ReactComponent as OriginalSunIcon } from '../../assets/SunIcon.svg';


export const MoonIcon= styled(OriginalMoonIcon)`
  width: 22px;
  height: 22px;
  stroke-width: 2;
  stroke: ${(p) => p.theme.iconColor};
`;

export const SunIcon = styled(OriginalSunIcon)`
  fill: ${(p) => p.theme.iconColor};
  width: 22px;
  height: 22px;
  stroke-width: 2;
  stroke: ${(p) => p.theme.iconColor};
`;


export const ThemeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.textBlack};
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: ${({ $isDarkMode }) => ($isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)')};
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? 1 : 0.8)};

  &:hover {
    transform: scale(1.2) ${({ $isDarkMode }) => ($isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

