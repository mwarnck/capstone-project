import styled from 'styled-components';
import DrinkCard from '../components/DrinkCard.js';
import addNewDrinkIcon from '../icons/addNewDrinkIcon.svg';
import { useNavigate } from 'react-router-dom';

export default function MyDrinksPage({ drinks, toggleBookmark }) {
  const navigate = useNavigate();

  return (
    <DrinklistContainer>
      <MyDrinksHeadline>My own Drinks</MyDrinksHeadline>
      <AddDrinkButton onClick={() => navigate('/createDrinkForm')}>
        <img src={addNewDrinkIcon} width="50" height="50" alt="add new drink" />
        <span className="sr-only">Add new drink icon</span>
      </AddDrinkButton>
      {drinks &&
        drinks
          .filter(drink => drink.isMyDrink === true)

          .map(drink => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
              toggleBookmark={toggleBookmark}
            />
          ))}
      {drinks.filter(drink => drink.isMyDrink === true).length < 1 && (
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
  position: relative;
`;

const EmptyState = styled.p`
  padding: 20px 20px 20px;
  text-align: center;
  max-width: 600px;
  font-size: 0.9rem;
  margin-left: auto;
  margin-right: auto;
`;

const MyDrinksHeadline = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.3rem;
  color: var(--font-color-headlines-bright);
  text-align: center;
  margin: 20px auto;
`;

const AddDrinkButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: var(--bg-color-main);
  border-style: none;
`;
