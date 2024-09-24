import React from 'react';
import { useParams } from 'react-router-dom';

const Measurements = () => {
  const { athleteId } = useParams();

  return (
    <div>
      <h1>Заміри для спортсмена {athleteId}</h1>
    </div>
  );
};

export default Measurements;
