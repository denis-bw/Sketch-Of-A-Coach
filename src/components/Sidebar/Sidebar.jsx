import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { User, Users, Calendar, BarChart2, DollarSign, ChevronRight, LogOut } from 'lucide-react';
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
  LogoContainer
} from './Sidebar.styled';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const isSubmenuActive = (submenu) => {
    return submenu.some(subItem => location.pathname.startsWith(subItem.path));
  };

  const menuItems = [
    { 
      name: 'Мій аккаунт', 
      icon: <User size={18} />, 
      path: '/my-account' 
    },
    { 
      name: 'Мої команди', 
      icon: <Users size={18} />, 
      submenu: [
        { name: 'Teams', path: '/teams' },
        { name: 'Athletes', path: '/athletes' },
        { name: 'Measurements', path: '/measurements' }
      ]
    },
    { 
      name: 'Календар', 
      icon: <Calendar size={18} />, 
      submenu: [
        { name: 'Calendar', path: '/calendar' },
        { name: 'Draft', path: '/draft-calendar' }
      ]
    },
    { 
      name: 'Статистика', 
      icon: <BarChart2 size={18} />, 
      submenu: [
        { name: 'Yearly', path: '/statistics-yearly' },
        { name: 'Measurements', path: '/statistics-measurements' },
        { name: 'Visits', path: '/statistics-visits' }
      ]
    },
    { 
      name: 'Платежі', 
      icon: <DollarSign size={18} />, 
      submenu: [
        { name: 'Teams', path: '/payment-history' },
        { name: 'Sponsors & Additional-Expenses', path: '/sponsors-and-expensess-payments' }
      ]
    }
  ];

 
  useEffect(() => {
    if (window.innerWidth <= 768 && isOpen) {
      toggleSidebar(); 
    }
  }, [location.pathname, isOpen, toggleSidebar]);

  return (
    <SidebarContainer isOpen={isOpen}>
      <LogoContainer>
        <Logo to={"/my-account"}>Coach's Sketch</Logo>
        
        
        {isOpen && (
          <SidebarToggleButton onClick={toggleSidebar}>X</SidebarToggleButton>
        )}
      </LogoContainer>
      
      <p>Панель користувача</p>

      <Navigation>
        {menuItems.map((item) => {
          const isActive = isSubmenuActive(item.submenu || []);

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
                  <ChevronRight 
                    size={16} 
                    style={{
                      marginLeft: 'auto',
                      transform: activeSubmenu === item.name ? 'rotate(90deg)' : 'none'
                    }}
                  />
                </StyledLink>
              ) : (
                <StyledLink to={item.path} active={location.pathname === item.path ? 1 : 0}>
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

      <LogoutButton>
        <LogOut size={18} />
        <span>Вийти</span>
      </LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
