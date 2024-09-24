import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import MyAccount from './pages/MyAccount/MyAccount';
import TeamsList from './pages/MyTeams/TeamsList/TeamsList';
import TeamDetails from './pages/MyTeams/TeamDetails/TeamDetails';
import AthletesList from './pages/MyTeams/AthletesList/AthletesList';
import MeasurementsSelection from './pages/MyTeams/MeasurementsSelection/MeasurementsSelection';
import Measurements from './pages/MyTeams/Measurements/Measurements';

import ParentsInfo from './pages/MyTeams/Athlete/ParentsInfo/ParentsInfo';
import AthleteHistory from './pages/MyTeams/Athlete/AthleteHistory/AthleteHistory';
import AthleteDetails from './pages/MyTeams/Athlete/AthleteDetails';

import WeeklyCalendar from './pages/Calendar/WeeklyCalendar/WeeklyCalendar';
import MonthlyCalendar from './pages/Calendar/MonthlyCalendar/MonthlyCalendar';
import Event from './pages/Calendar/Event/Event';
import Draft from './pages/Calendar/Draft/Draft';

import ChooseAthleteVisitsStatistics from './pages/Statistics/ChooseAthleteVisitsStatistics/ChooseAthleteVisitsStatistics';
import MeasurementsStatistics from './pages/Statistics/MeasurementsStatistics/MeasurementsStatistics';
import VisitsStatistics from './pages/Statistics/VisitsStatistics/VisitsStatistics';
import YearlyStatistics from './pages/Statistics/YearlyStatistics/YearlyStatistics';
import ChooseAthleteMeasurementsStatistics from './pages/Statistics/ChooseAthleteMeasurementsStatistics/ChooseAthleteMeasurementsStatistics';


import ChooseAthletePayment from './pages/Payments/ChooseAthletePayment/ChooseAthletePayment';
import PaymentDetails from './pages/Payments/PaymentDetails/PaymentDetails';
import PaymentHistory from './pages/Payments/PaymentHistory/PaymentHistory';
import SponsorsAndExpensessPayments from './pages/Payments/SponsorsAndExpensessPayments/SponsorsAndExpensessPayments';


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
             {/* Мій аккаунт */}
            <Route path="my-account" element={<MyAccount />} />

             {/* Мої команди */}
              <Route path="teams" element={<TeamsList />} />
              <Route path="teams/:teamId" element={<TeamDetails />} />

              {/* Атлети */}
              <Route path="athletes" element={<AthletesList />} />
              <Route path="athletes/:athleteId" element={<AthleteDetails />}/>
              <Route path="athletes/:athleteId/parents" element={<ParentsInfo />} />
              <Route path="athletes/:athleteId/history" element={<AthleteHistory />} />
              
              {/* Виміри */}
              <Route path="measurements" element={<MeasurementsSelection />} />
              <Route path="measurements/:athleteId" element={<Measurements />} />

            {/* Календар */}
            <Route path="calendar" element={<MonthlyCalendar />} />
            <Route path="calendar/week" element={<WeeklyCalendar />} />
            <Route path="calendar/event" element={<Event />} />
            <Route path="draft-calendar" element={<Draft />} />

            {/* Статистика */}
            <Route path="statistics-yearly/" element={<YearlyStatistics />} />
            <Route path="statistics-measurements" element={<ChooseAthleteMeasurementsStatistics />} />
            <Route path="statistics-measurements/:athleteId" element={<MeasurementsStatistics />} />
            {/* monthly-statistics/:athleteId and year st &&?? */}
            <Route path="statistics-visits" element={<ChooseAthleteVisitsStatistics />} />
            
            <Route path="statistics-visits/:athleteId" element={<VisitsStatistics />} />
         

            {/* Оплата */}
            <Route path="payment-history" element={<ChooseAthletePayment />} />
            <Route path="payment-history/:athleteId" element={<PaymentHistory />}/>
            <Route path="payment-history/:athleteId/payment-details/:paymentId" element={<PaymentDetails />} />

            <Route path="sponsors-and-expensess-payments" element={<SponsorsAndExpensessPayments />} />


          <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
}
export default App;
