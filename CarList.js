import React from 'react';

const CarList = ({ cars, onBook }) => {
  return (
    <div>
      <h2>Available Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <strong>{car.name}</strong> - ${car.price} per day{' '}
            {car.available ? (
              <button onClick={() => onBook(car.id)}>Book Now</button>
            ) : (
              <span style={{ color: 'red' }}>Booked</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
