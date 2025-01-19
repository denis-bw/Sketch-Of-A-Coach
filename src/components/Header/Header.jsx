import React from 'react';
import { Settings, Moon, Sun } from 'react-feather';
import { HeaderContainer, ToggleButton, ThemeIcon,BurgerButton,Title,ContanerSettings, TexeName  } from './Header.styled';

const Header = ({ isDarkMode, toggleTheme, toggleSidebar , isMobile }) => {
  return (
    <HeaderContainer>
     {isMobile && <BurgerButton onClick={toggleSidebar}>☰</BurgerButton>}
      <Title>TEXTФ ФФФафіваф івафіваів</Title>
      <ContanerSettings style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Settings size={20} />
        <ToggleButton onClick={toggleTheme}>
          <ThemeIcon $isDarkMode={isDarkMode}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </ThemeIcon>
        </ToggleButton>
        <TexeName>Nadiia</TexeName>
        <img
          src="/api/placeholder/32/32"
          alt="User"
          style={{ width: '2rem', height: '2rem', borderRadius: '9999px', borderColor: "#FFF" }}
        />
      </ContanerSettings>
    </HeaderContainer>
  );
};

export default Header;
