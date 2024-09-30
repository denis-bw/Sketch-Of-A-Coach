// components/SharedLayout.js
import React from 'react';
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { LayoutContainer, ContentContainer } from './SharedLayout.styled';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';
import Loader from '../Loader/Loader'

const SharedLayout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <ContentContainer>
        <Header />
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
