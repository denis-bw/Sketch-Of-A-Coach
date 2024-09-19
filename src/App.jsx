import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import MyAccount from './pages/MyAccount/MyAccount';
import MyTeams from './pages/MyTeams/MyTeams';
import Calendar from './pages/Calendar/Calendar';
import Statistics from './pages/Statistics/Statistics';
import Payments from './pages/Payments/Payments';

import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';



const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
       <GlobalStyles />
      <AppWrapper>
        <button style={{height: "30px", width: "50px", color: "teal"}} onClick={toggleTheme}></button>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="my-account" element={<MyAccount />} />
            <Route path="my-teams/*" element={<MyTeams />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="payments" element={<Payments />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
}
export default App;
