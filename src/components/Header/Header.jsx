import React from 'react';
import { 
  HeaderContainer, 
  BurgerButton, 
  Title, 
  ContanerSettings, 
  TexeName,
  MenuIcon
} from './Header.styled';
import BtnTheme from '../BtnTheme/BtnTheme';
import { ReactComponent as SettingsIcon } from '../../assets/SettingsIcon.svg';

const Header = ({ toggleSidebar, isMobile }) => {
  
  return (
    <HeaderContainer>
      {isMobile && (
        <>
          <BurgerButton onClick={toggleSidebar}><MenuIcon  /></BurgerButton>
          <Title>TEXTФ ФФФафіваф івафіваів</Title>
          <ContanerSettings>
            <SettingsIcon style={{ width: '20px', height: '20px' }}  />
            <BtnTheme/>
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
            <BtnTheme/>
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
