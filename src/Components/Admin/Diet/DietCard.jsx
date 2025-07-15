// DietCard.jsx
import React from 'react';

const DietCard = ({ diet }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px'
    }}>
      <h3>{diet.name}</h3>
      <p>Calories: {diet.calories}</p>
      <p>Category: {diet.category}</p>
      <p>Shared With: {diet.sharedWith}</p>
    </div>
  );
};

export default DietCard;
