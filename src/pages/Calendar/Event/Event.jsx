import React from 'react';
import { NavLink } from 'react-router-dom';

const Event = () => {
  return (
    <div>
      <h1>Події</h1>
      <NavLink to="/calendar">Перейти до календаря за місяць/ </NavLink>
      <NavLink to="/calendar/week">Перейти до тижневого календаря</NavLink>
    </div>
  );
};

export default Event;
