import React from 'react';
import { 
  HeaderContainer, 
  BurgerButton, 
  Title, 
  ContanerSettings, 
  TexeName,
  MenuIcon
} from './Header.styled';
import profilePlaceholder from "../../assets/PlaceholderProfile.jpg"
import BtnTheme from '../BtnTheme/BtnTheme';
import { ReactComponent as SettingsIcon } from '../../assets/SettingsIcon.svg';
import { useSelector } from 'react-redux';

const Header = ({ toggleSidebar, isMobile, title }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <HeaderContainer>
      {isMobile && (
        <>
          <BurgerButton onClick={toggleSidebar}><MenuIcon  /></BurgerButton>
          <Title>{title}</Title>
          <ContanerSettings>
            <SettingsIcon style={{ width: '20px', height: '20px' }}  />
            <BtnTheme/>
            <TexeName>{user.username || "User"}</TexeName>
            <img
              src={profilePlaceholder}
              alt="User"
              style={{ width: '2rem', height: '2rem', borderRadius: '9999px', borderColor: "#FFF" }}
            />
          </ContanerSettings>
        </>
      )}
      {!isMobile && (
        <>
          <Title>{title}</Title>
          <ContanerSettings>
            <SettingsIcon style={{ width: '20px', height: '20px' }}  />
            <BtnTheme/>
            <TexeName>{user.username || "User"}</TexeName>
            <img
              src={profilePlaceholder}
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
