import React, { useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '../../assets/CloseIcon.svg';
import { ReactComponent as MyAccount } from '../../assets/MyAccount.svg';
// import { ReactComponent as CalendarIcon } from '../../assets/CalendarIcon.svg';
import { ReactComponent as TeamIcon } from '../../assets/TeamIcon.svg';
import { ReactComponent as StatisticsIcon } from '../../assets/StatisticsIcon.svg';
import { ReactComponent as PaymentsIcon } from '../../assets/PaymentsIcon.svg';

import {
  SidebarContainer,
  Logo,
  Navigation,
  StyledLink,
  IconWrapper,
  LogoutButton,
  SubMenu,
  SubMenuItem,
  SidebarToggleButton,
  LogoContainer,
  NamedMenu,
  SidebarIcon,
  RightChevronIcon,
  LogoutIcon,
  CalendarIcon,
} from './Sidebar.styled';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuItemClick = () => {
    if (isMobile && isOpen) {
      toggleSidebar();
    }
  };

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const isSubmenuActive = (submenu) => {
    return submenu.some(subItem => location.pathname.startsWith(subItem.path));
  };

  const menuItems = [
    { 
      name: 'Мій аккаунт', 
      icon: <SidebarIcon><MyAccount  /></SidebarIcon>, 
      path: '/my-account' 
    },
    { 
      name: 'Мої команди', 
      icon: <SidebarIcon><TeamIcon /></SidebarIcon>, 
      submenu: [
        { name: 'Teams', path: '/teams' },
        { name: 'Athletes', path: '/athletes' },
        { name: 'Measurements', path: '/measurements' }
      ]
    },
    { 
      name: 'Календар', 
      icon: <CalendarIcon   />, 
      submenu: [
        { name: 'Calendar', path: '/calendar' },
        { name: 'Draft', path: '/draft-calendar' }
      ]
    },
    { 
      name: 'Статистика', 
      icon:  <SidebarIcon><StatisticsIcon   /></SidebarIcon>, 
      submenu: [
        { name: 'Yearly', path: '/statistics-yearly' },
        { name: 'Measurements', path: '/statistics-measurements' },
        { name: 'Visits', path: '/statistics-visits' }
      ]
    },
    { 
      name: 'Платежі', 
      icon:  <SidebarIcon><PaymentsIcon /></SidebarIcon>, 
      submenu: [
        { name: 'Teams', path: '/payment-history' },
        { name: 'Sponsors & Additional-Expenses', path: '/sponsors-and-expensess-payments' }
      ]
    }
  ];

  const handleSidebarToggle = () => {
    toggleSidebar();
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <LogoContainer>
        <Logo onClick={handleMenuItemClick} to={"/my-account"}>Coach's Sketch</Logo>
        {isOpen && (
          <SidebarToggleButton onClick={handleSidebarToggle}>
           < CloseIcon />
          </SidebarToggleButton>
        )}
      </LogoContainer>

      <NamedMenu>Панель користувача</NamedMenu>

      <Navigation>
        {menuItems.map((item) => {
          const isActive = item.submenu ? isSubmenuActive(item.submenu) : location.pathname === item.path;
          return (
            <div key={item.name}>
              {item.submenu ? (
                <StyledLink 
                  as="div" 
                  onClick={() => toggleSubmenu(item.name)}
                  active={isActive ? 1 : 0}
                >
                  <IconWrapper>{item.icon}</IconWrapper>
                  <span>{item.name}</span>
                  <RightChevronIcon isActive={activeSubmenu === item.name} />
                </StyledLink>
              ) : (
                <StyledLink 
                  to={item.path} 
                  active={isActive ? 1 : 0}
                  onClick={handleMenuItemClick}
                >
                  <IconWrapper>{item.icon}</IconWrapper>
                  <span>{item.name}</span>
                </StyledLink>
              )}

              {item.submenu && activeSubmenu === item.name && (
                <SubMenu>
                  {item.submenu.map((subItem) => (
                    <SubMenuItem 
                      key={subItem.name} 
                      to={subItem.path}
                      className={location.pathname.startsWith(subItem.path) ? 'active' : ''}
                      onClick={handleMenuItemClick}
                    >
                      {subItem.name}
                    </SubMenuItem>
                  ))}
                </SubMenu>
              )}
            </div>
          );
        })}
      </Navigation>

      <LogoutButton >
        <LogoutIcon styled=' width: 100%, height: 100%' />
        <span>Вийти</span>
      </LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;