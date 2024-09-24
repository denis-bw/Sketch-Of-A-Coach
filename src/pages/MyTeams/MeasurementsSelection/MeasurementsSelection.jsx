import React from 'react';
import { NavLink } from 'react-router-dom';

const athletes = [
  { id: 1, name: 'Спортсмен 1' },
  { id: 2, name: 'Спортсмен 2' },
  { id: 3, name: 'Спортсмен 3' },
];

const MeasurementsSelection = () => {
  return (
    <div>
      <h1>Вибір спортсмена для замірів</h1>
      <ul>
        {athletes.map((athlete) => (
          <li key={athlete.id}>
            <NavLink 
              to={`/measurements/${athlete.id}`} 
              style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
              {athlete.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeasurementsSelection;
