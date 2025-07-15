// DietForm.jsx
import React, { useState } from 'react';

const DietForm = ({ onAddDiet }) => {
  const [showForm, setShowForm] = useState(false);
  const [diet, setDiet] = useState({
    name: '',
    calories: '',
    category: '',
    sharedWith: ''
  });

  const role = localStorage.getItem('role');

  if (role !== 'admin') return null;

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    setDiet({ ...diet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddDiet) {
      onAddDiet(diet);
    }
    setDiet({ name: '', calories: '', category: '', sharedWith: '' });
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={handleToggleForm} style={{ backgroundColor: '#1E90FF', color: 'white', padding: '10px', border: 'none', borderRadius: '4px' }}>
        {showForm ? 'Close Form' : 'Add Diet'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
          <input name="name" type="text" placeholder="Diet Name" value={diet.name} onChange={handleChange} required /><br />
          <input name="calories" type="number" placeholder="Calories" value={diet.calories} onChange={handleChange} required /><br />
          <input name="category" type="text" placeholder="Category" value={diet.category} onChange={handleChange} required /><br />
          <input name="sharedWith" type="text" placeholder='Share with (user email or "all")' value={diet.sharedWith} onChange={handleChange} required /><br />
          <button type="submit" style={{ marginTop: '10px', backgroundColor: '#1E90FF', color: 'white', padding: '10px', border: 'none', borderRadius: '4px' }}>Add Diet</button>
        </form>
      )}
    </div>
  );
};

export default DietForm;
