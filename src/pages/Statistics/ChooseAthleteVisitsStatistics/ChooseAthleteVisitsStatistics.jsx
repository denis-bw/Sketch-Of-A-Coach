
import React from 'react';
import { NavLink } from 'react-router-dom';

const ChooseAthleteStatistics = () => {

const athletes = [
  { id: 1, name: 'Атлет 1' },
  { id: 2, name: 'Атлет 2' },
  { id: 3, name: 'Атлет 3' },
];

  return (
    <div>
      <h1>Вибір атлета для статистики вимірювань</h1>
      <ul>
        {athletes.map((athlete) => (
          <li key={athlete.id}>
            <NavLink to={`/statistics-visits/${athlete.id}`}>
              {athlete.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default ChooseAthleteStatistics