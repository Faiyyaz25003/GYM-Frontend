// Diet.jsx
import React, { useState } from 'react';
import DietForm from './DietForm';
import DietList from './DietList';

const Diet = () => {
  const [diets, setDiets] = useState([]);

  const handleAddDiet = (newDiet) => {
    setDiets([...diets, newDiet]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Diet Plans</h1>
      <DietForm onAddDiet={handleAddDiet} />
      <DietList diets={diets} />
    </div>
  );
};

export default Diet;
