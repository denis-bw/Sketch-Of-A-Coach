import React from 'react'
import { NavLink } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";
import { useEffect } from 'react'

const TeamsList = () => {

    const { setTitle } = useOutletContext();
    
      useEffect(() => {
        setTitle("Список команд");
      }, [setTitle]);
    
  
const teamsData = [
  { id: 1, name: 'Team A' },
  { id: 2, name: 'Team B' },
  { id: 3, name: 'Team C' },
];

  return (
    <div>
      <h1>Список команд</h1>
      <ul>
        {teamsData.map((team) => (
          <li key={team.id}>
            <NavLink 
              to={`/teams/${team.id}`} 
            >
              {team.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsList;