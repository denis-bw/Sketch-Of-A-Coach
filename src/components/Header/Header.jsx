import React from 'react';
import { Settings, Moon, Sun } from 'react-feather';
import { HeaderContainer, ToggleButton, ThemeIcon,BurgerButton  } from './Header.styled';

const Header = ({ isDarkMode, toggleTheme, toggleSidebar , isMobile }) => {
  return (
    <HeaderContainer>
     {isMobile && <BurgerButton onClick={toggleSidebar}>☰</BurgerButton>}
      <h2>TEXT</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Settings size={20} />
        <ToggleButton onClick={toggleTheme}>
          <ThemeIcon $isDarkMode={isDarkMode}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </ThemeIcon>
        </ToggleButton>
        <span>Nadiia</span>
        <img
          src="/api/placeholder/32/32"
          alt="User"
          style={{ width: '2rem', height: '2rem', borderRadius: '9999px' }}
        />
      </div>
    </HeaderContainer>
  );
};

export default Header;
