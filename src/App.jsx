import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import React, { useState, lazy } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';

const MyAccount = lazy(() => import('./pages/MyAccount/MyAccount'));
const TeamsList = lazy(() => import('./pages/MyTeams/TeamsList/TeamsList'));
const TeamDetails = lazy(() => import('./pages/MyTeams/TeamDetails/TeamDetails'));
const AthletesList = lazy(() => import('./pages/MyTeams/AthletesList/AthletesList'));
const MeasurementsSelection = lazy(() => import('./pages/MyTeams/MeasurementsSelection/MeasurementsSelection'));
const Measurements = lazy(() => import('./pages/MyTeams/Measurements/Measurements'));

const ParentsInfo = lazy(() => import('./pages/MyTeams/Athlete/ParentsInfo/ParentsInfo'));
const AthleteHistory = lazy(() => import('./pages/MyTeams/Athlete/AthleteHistory/AthleteHistory'));
const AthleteDetails = lazy(() => import('./pages/MyTeams/Athlete/AthleteDetails'));

const WeeklyCalendar = lazy(() => import('./pages/Calendar/WeeklyCalendar/WeeklyCalendar'));
const MonthlyCalendar = lazy(() => import('./pages/Calendar/MonthlyCalendar/MonthlyCalendar'));
const Event = lazy(() => import('./pages/Calendar/Event/Event'));
const Draft = lazy(() => import('./pages/Calendar/Draft/Draft'));

const ChooseAthleteVisitsStatistics = lazy(() => import('./pages/Statistics/ChooseAthleteVisitsStatistics/ChooseAthleteVisitsStatistics'));
const MeasurementsStatistics = lazy(() => import('./pages/Statistics/MeasurementsStatistics/MeasurementsStatistics'));
const VisitsStatistics = lazy(() => import('./pages/Statistics/VisitsStatistics/VisitsStatistics'));
const YearlyStatistics = lazy(() => import('./pages/Statistics/YearlyStatistics/YearlyStatistics'));
const ChooseAthleteMeasurementsStatistics = lazy(() => import('./pages/Statistics/ChooseAthleteMeasurementsStatistics/ChooseAthleteMeasurementsStatistics'));

const ChooseAthletePayment = lazy(() => import('./pages/Payments/ChooseAthletePayment/ChooseAthletePayment'));
const PaymentDetails = lazy(() => import('./pages/Payments/PaymentDetails/PaymentDetails'));
const PaymentHistory = lazy(() => import('./pages/Payments/PaymentHistory/PaymentHistory'));
const SponsorsAndExpensessPayments = lazy(() => import('./pages/Payments/SponsorsAndExpensessPayments/SponsorsAndExpensessPayments'));

const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));




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
          <Routes>
            <Route path="/" element={<SharedLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}>
              
              <Route path="my-account" element={<MyAccount />} />

                <Route path="teams" element={<TeamsList />} />
                <Route path="teams/:teamId" element={<TeamDetails />} />

                <Route path="athletes" element={<AthletesList />} />
                <Route path="athletes/:athleteId" element={<AthleteDetails />}/>
                <Route path="athletes/:athleteId/parents" element={<ParentsInfo />} />
                <Route path="athletes/:athleteId/history" element={<AthleteHistory />} />
                
                <Route path="measurements" element={<MeasurementsSelection />} />
                <Route path="measurements/:athleteId" element={<Measurements />} />

              <Route path="calendar" element={<MonthlyCalendar />} />
              <Route path="calendar/week" element={<WeeklyCalendar />} />
              <Route path="calendar/event" element={<Event />} />
              <Route path="draft-calendar" element={<Draft />} />

              <Route path="statistics-yearly/" element={<YearlyStatistics />} />
              <Route path="statistics-measurements" element={<ChooseAthleteMeasurementsStatistics />} />
              <Route path="statistics-measurements/:athleteId" element={<MeasurementsStatistics />} />
              {/* monthly-statistics/:athleteId and year st &&?? */}
          
              <Route path="statistics-visits" element={<ChooseAthleteVisitsStatistics />} />
              
              <Route path="statistics-visits/:athleteId" element={<VisitsStatistics />} />

              <Route path="payment-history" element={<ChooseAthletePayment />} />
              <Route path="payment-history/:athleteId" element={<PaymentHistory />}/>
              <Route path="payment-history/:athleteId/payment-details/:paymentId" element={<PaymentDetails />} />

              <Route path="sponsors-and-expensess-payments" element={<SponsorsAndExpensessPayments />} />

            <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
    </ThemeProvider>
  );
}
export default App;
