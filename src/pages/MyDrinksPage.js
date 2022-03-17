import { useState } from 'react';
import styled from 'styled-components';
import DrinkCard from '../components/DrinkCard.js';

export default function MyDrinksPage() {
  const [myDrinks, setMyDrinks] = useState([]);

  return (
    <DrinklistContainer>
      {myDrinks &&
        myDrinks.map(drink => <DrinkCard key={drink.idDrink} drink={drink} />)}
      {myDrinks.length < 1 && (
        <EmptyState>
          There is nothing to show at the moment. Start with creating your own
          Drinks by clicking on the "+" icon.
        </EmptyState>
      )}
    </DrinklistContainer>
  );
}

const DrinklistContainer = styled.section`
  display: grid;
  gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 0;
  margin-top: 0;
`;

const EmptyState = styled.p`
  padding: 20px 20px 20px;
  text-align: center;
  max-width: 600px;
  font-size: 0.9rem;
  margin-left: auto;
  margin-right: auto;
`;
