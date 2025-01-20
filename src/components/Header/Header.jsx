import React from 'react';
import  { useEffect } from 'react';
import { 
  HeaderContainer, 
  ToggleButton, 
  ThemeIcon, 
  BurgerButton, 
  Title, 
  ContanerSettings, 
  TexeName,
  MoonIcon,
  SunIcon,
  MenuIcon
} from './Header.styled';
import { toggleTheme, selectTheme } from '../../redux/theme/themeSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as SettingsIcon } from '../../assets/SettingsIcon.svg';

const Header = ({ toggleSidebar, isMobile }) => {
 
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const isDarkMode = theme === 'dark';
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch(toggleTheme(savedTheme));
    }
  }, [dispatch]);

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(toggleTheme(newTheme));
  };
  
  return (
    <HeaderContainer>
      {isMobile && (
        <>
          <BurgerButton onClick={toggleSidebar}><MenuIcon  /></BurgerButton>
          <Title>TEXTФ ФФФафіваф івафіваів</Title>
          <ContanerSettings>
            <SettingsIcon style={{ width: '20px', height: '20px' }}  />
            <ToggleButton  onClick={handleToggleTheme}>
              <ThemeIcon $isDarkMode={isDarkMode}>
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </ThemeIcon>
            </ToggleButton>
            <TexeName>Nadiia</TexeName>
            <img
              src="/api/placeholder/32/32"
              alt="User"
              style={{ width: '2rem', height: '2rem', borderRadius: '9999px', borderColor: "#FFF" }}
            />
          </ContanerSettings>
        </>
      )}
      {!isMobile && (
        <>
          <Title>TEXTФ ФФФафіваф івафіваів</Title>
          <ContanerSettings>
            <SettingsIcon style={{ width: '20px', height: '20px' }}  />
            <ToggleButton onClick={handleToggleTheme}>
              <ThemeIcon $isDarkMode={isDarkMode}>
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </ThemeIcon>
            </ToggleButton>
            <TexeName>Nadiia</TexeName>
            <img
              src="/api/placeholder/32/32"
              alt="User"
              style={{ width: '2rem', height: '2rem', borderRadius: '9999px', borderColor: "#FFF" }}
            />
          </ContanerSettings>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
