// components/Sidebar.styled.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
  width: 240px;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.h1`
  color: #10b981;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: inherit;
  background-color: ${props => props.active ? '#d1fae5' : 'transparent'};
  border-radius: 0.25rem;

  &.active {
    background-color: #d1fae5;
    color: #10b981;
  }

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 0.75rem;
`;

export const LogoutButton = styled.button`
  margin-top: auto;
  padding: 0.75rem;
  background-color: #10b981;
  color: white;
  border-radius: 0.25rem;
  &:hover {
    background-color: #059669;
  }
`;
