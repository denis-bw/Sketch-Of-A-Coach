import React from 'react';
import { NavLink } from 'react-router-dom';


const athletes = [
  { id: 1, name: 'Атлет 1' },
  { id: 2, name: 'Атлет 2' },
  { id: 3, name: 'Атлет 3' },
];

const ChooseAthleteMeasurementsStatistics = () => {
  return (
    <div>
      <h1>Вибір атлета для статистики вимірювань</h1>
      <ul>
        {athletes.map((athlete) => (
          <li key={athlete.id}>
            <NavLink to={`/statistics-measurements/${athlete.id}`}>
              {athlete.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChooseAthleteMeasurementsStatistics;
