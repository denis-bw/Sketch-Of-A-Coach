import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarToggleButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: #10b981;
  cursor: pointer;
  margin-bottom: 1rem;
  align-self: flex-end;

  &:hover {
    color: #059669;
  }
`;

export const SidebarContainer = styled.div`
  width: 240px;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh;

  /* Для мобільної версії */
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 101111;
    width: 100%;
    height: 100%;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
    overflow-y: auto; 
  }
`;

export const Logo = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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

  ${props => props.as === 'div' && `
    cursor: pointer;
  `}
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
  min-width: 18px;
`;

export const LogoutButton = styled.button`
  margin-top: auto;
  padding: 0.75rem;
  background-color: #10b981;
  color: white;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #059669;
  }

  span {
    margin-left: 0.75rem;
  }
`;

export const SubMenu = styled.div`
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`;

export const SubMenuItem = styled(NavLink)`
  display: block;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: inherit;
  font-size: 0.9rem;

  &:hover {
    background-color: #f3f4f6;
  }

  &.active {
    color: #10b981;
  }
`;
