// components/Header.js
import React from 'react';
import { Settings, Moon } from 'lucide-react';
import { HeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <h2>TEXT</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Settings size={20} />
        <Moon size={20} />
        <span>Nadiia</span>
        <img src="/api/placeholder/32/32" alt="User" style={{ width: '2rem', height: '2rem', borderRadius: '9999px' }} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
