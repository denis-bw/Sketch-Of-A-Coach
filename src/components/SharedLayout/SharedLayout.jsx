import React, { useState, useEffect } from 'react';
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { LayoutContainer, ContentContainer } from './SharedLayout.styled';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(prevState => !prevState);

  return (
    <LayoutContainer>
      {(isMobile && isSidebarOpen) || !isMobile ? (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      ) : null}

      <ContentContainer>
        <Header
          toggleSidebar={toggleSidebar}
          isMobile={isMobile}
        />
        <MainContent>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MainContent>
      </ContentContainer>
    </LayoutContainer>
  );
};

export default SharedLayout;
