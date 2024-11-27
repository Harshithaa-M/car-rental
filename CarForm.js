import React, { useState } from 'react';

const CarForm = ({ onAddCar }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return alert('Please fill out all fields.');

    const newCar = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      available: true,
    };

    onAddCar(newCar);
    setName('');
    setPrice('');
  };

  return (
    <div>
      <h2>Add a New Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Car Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price Per Day"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default CarForm;
