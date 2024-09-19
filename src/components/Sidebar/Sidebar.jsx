// components/Sidebar.js
import React from 'react';
import { LogOut } from 'lucide-react';
import { SidebarContainer, Logo, LogoutButton, Navigation, StyledLink, IconWrapper } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>Coach's Sketch</Logo>
      <p>User Panel</p>
      <Navigation>
        <StyledLink to="/my-account">
          <IconWrapper>👤</IconWrapper>
          My account
        </StyledLink>
        <StyledLink to="/my-teams" active>
          <IconWrapper>👥</IconWrapper>
          My teams
        </StyledLink>
        <StyledLink to="/calendar">
          <IconWrapper>📅</IconWrapper>
          Calendar
        </StyledLink>
        <StyledLink to="/statistics">
          <IconWrapper>📊</IconWrapper>
          Statistics
        </StyledLink>
        <StyledLink to="/payments">
          <IconWrapper>💰</IconWrapper>
          Payments
        </StyledLink>
      </Navigation>
      <LogoutButton><LogOut size={18} /> Log out</LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
