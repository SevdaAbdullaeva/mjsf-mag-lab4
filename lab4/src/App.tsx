// src/App.tsx
import React from 'react';
import Button from './components/Button/Button';
import Dropdown from './components/Dropdown/Dropdown';
import { FaBeer, FaApple, FaAndroid, FaBaseballBall, FaBasketballBall, FaFootballBall, FaHeart } from 'react-icons/fa';
import './App.css';

const App: React.FC = () => {
  const dropdownItems = [
    { id: '1', label: 'Apple', icon: <FaApple /> },
    { id: '2', label: 'Android', icon: <FaAndroid /> },
    { id: '3', label: 'Football', icon: <FaFootballBall/> },
    { id: '4', label: 'Baseball', icon: <FaBaseballBall /> },
    { id: '5', label: 'Basketball', icon: <FaBasketballBall /> },
    // Додайте більше елементів за потребою
  ];

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  const handleDropdownSelect = (selected: any) => {
    console.log('Selected:', selected);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl mb-4">Welcome to My React App</h1>
        <div className="mb-6">
          <Button
            label="Click Me"
            color="blue"
            size="large"
            icon={<FaHeart />}
            onClick={handleButtonClick}
          />
        </div>
        <div className="w-64">
          <Dropdown items={dropdownItems} multiple={true} onSelect={handleDropdownSelect} />
        </div>
      </header>
    </div>
  );
};

export default App;
