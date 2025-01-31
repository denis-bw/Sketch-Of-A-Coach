import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import React, { useEffect, Suspense, lazy } from 'react';

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

const  RegisterPage  = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

import RestrictedRoute from './components/RestrictedRoute.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'; 
import Loader from './components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/authOperations';

function App() {
   const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch, token]);
  
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" index element={<RestrictedRoute redirectTo="/my-account" component={< HomePage />} />} />
      <Route path="/register" element={<RestrictedRoute redirectTo="/my-account" component={<RegisterPage />} />} />
      <Route path="/login" element={<RestrictedRoute redirectTo="/my-account" component={<LoginPage />} />} />
      
      
      <Route path="/" element={<PrivateRoute redirectTo="/login" component={<SharedLayout/>} />} >  
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
 
      </Route>
      <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}
export default App;
