import React from 'react';
import { NavLink } from 'react-router-dom';

// Припустимо, що це ваш список атлетів. Зазвичай дані отримуються з API або стейту.
const athletes = [
  { id: 1, name: 'Атлет 1' },
  { id: 2, name: 'Атлет 2' },
  { id: 3, name: 'Атлет 3' },
];

const ChooseAthletePayment = () => {
  return (
    <div>
      <h1>Вибір атлета для історії платежів</h1>
      <ul>
        {athletes.map((athlete) => (
          <li key={athlete.id}>
            <NavLink to={`/payment-history/${athlete.id}`}>
              {athlete.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChooseAthletePayment;
