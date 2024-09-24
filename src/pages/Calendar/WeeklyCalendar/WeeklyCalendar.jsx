import React from 'react';
import { NavLink } from 'react-router-dom';

const WeeklyCalendar = () => {
  return (
    <div>
      <h1>Календар за тиждень</h1>
      <NavLink to="/calendar">Перейти до календаря за місяць/ </NavLink>
      <NavLink to="/calendar/event">Перейти до подій/</NavLink>
    </div>
  );
};

export default WeeklyCalendar;
