// DietList.jsx
import React from 'react';
import DietCard from './DietCard';

const DietList = ({ diets }) => {
  const userEmail = localStorage.getItem('email');
  const role = localStorage.getItem('role');

  const filteredDiets = diets.filter(diet => {
    if (role === 'admin') return true;
    return diet.sharedWith === 'all' || diet.sharedWith === userEmail;
  });

  return (
    <div style={{ marginTop: '20px' }}>
      {filteredDiets.map((diet, index) => (
        <DietCard key={index} diet={diet} />
      ))}
    </div>
  );
};

export default DietList;
