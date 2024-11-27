import React, { useState } from 'react';
import CarList from './components/CarList';
import CarForm from './components/CarForm';
import './App.css';

const App = () => {
  const [cars, setCars] = useState([
    { id: 1, name: 'Toyota Corolla', price: 40, available: true },
    { id: 2, name: 'Honda Civic', price: 50, available: true },
    { id: 3, name: 'Tesla Model 3', price: 100, available: true },
  ]);

  const bookCar = (id) => {
    setCars(
      cars.map((car) =>
        car.id === id ? { ...car, available: false } : car
      )
    );
  };

  return (
    <div className="App">
      <h1>Car Rental System</h1>
      <CarList cars={cars} onBook={bookCar} />
      <CarForm onAddCar={(newCar) => setCars([...cars, newCar])} />
    </div>
  );
};

export default App;
