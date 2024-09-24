import React from 'react';
import { NavLink } from 'react-router-dom';

const MonthlyCalendar = () => {
  return (
    <div>
      <h1>Календар за місяць</h1>
      <NavLink to="/calendar/week">Перейти до тижневого календаря/</NavLink>
      <NavLink to="/calendar/event">Перейти до подій/</NavLink>
    </div>
  );
};

export default MonthlyCalendar;
