import { useState, useEffect } from 'react';
import DrinkList from './pages/DrinkList.js';

function App() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <div>
      <DrinkList drinks={drinks} />
    </div>
  );

  async function getDrinks() {
    try {
      const response = await fetch('recipes.json');
      const data = await response.json();
      setDrinks(data.drinks);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }
}

export default App;
