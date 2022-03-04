import { useState } from 'react';
import Button from './Button.js';
import styled from 'styled-components';

function App() {
  const [drinks, setDrinks] = useState([]);

  console.log(drinks);
  return (
    <div>
      <Button handleClick={getDrinks}>Show Drinks</Button>
      {drinks &&
        drinks.map(drink => (
          <DrinkContainer key={drink.idDrink}>
            <p>{drink.strDrink}</p>
            <p>{drink.strIngredient1}</p>
            <p>{drink.strIngredient2}</p>
            <p>{drink.strIngredient3}</p>
            <p>{drink.strIngredient4}</p>
            <p>{drink.strIngredient5}</p>
            <p>{drink.strIngredient6}</p>
            <p>{drink.strIngredient7}</p>
            <p>{drink.strIngredient8}</p>
          </DrinkContainer>
        ))}
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

const DrinkContainer = styled.div`
  border: 1px solid black;
`;
