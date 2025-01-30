import React from 'react';
import  { useEffect } from 'react';
import { 
  ToggleButton, 
  ThemeIcon, 
  MoonIcon,
  SunIcon,
} from './BtnTheme.styled';
import { toggleTheme, selectTheme } from '../../redux/theme/themeSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const BtnTheme = () => {
 
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
    <ToggleButton onClick={handleToggleTheme}>
        <ThemeIcon $isDarkMode={isDarkMode}>
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </ThemeIcon>
    </ToggleButton>

  );
};

export default BtnTheme;
