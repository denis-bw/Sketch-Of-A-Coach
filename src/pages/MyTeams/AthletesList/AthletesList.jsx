import React from 'react'
import { NavLink } from 'react-router-dom';

const AthletesList = () => {

const athletesData = [
  { id: 1, name: 'Athlete A' },
  { id: 2, name: 'Athlete B' },
  { id: 3, name: 'Athlete C' },
];

  return (
    <div>
      <h1>Список спортсменів</h1>
      <ul>
        {athletesData.map((athlete) => (
          <li key={athlete.id}>
            <NavLink 
              to={`/athletes/${athlete.id}`} 
            >
              {athlete.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default AthletesList