import styled from 'styled-components';
import './theme.css';
import Autosuggest from 'react-autosuggest/dist/Autosuggest';
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import { useState } from 'react';

export default function ShoppingListPage({ drinks }) {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  return (
    <PageContainer>
      <Header>Shopping List</Header>
      <ShoppingListContainer>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsClearRequested={() => setSuggestions([])}
          onSuggestionsFetchRequested={({ value }) => {
            setSuggestions(getSuggestions(value));
          }}
          getSuggestionValue={suggestion => getSuggestionValue(suggestion)}
          renderSuggestion={renderSuggestion}
          inputProps={{
            placeholder: 'Type in drink names',
            value,
            onChange: (event, { newValue }) => {
              setValue(newValue);
            },
          }}
        />
        <SubHeading>Selected drinks:</SubHeading>
        <ShoppingItemList role="list">
          {selectedDrinks.map(drink => (
            <ShoppingItem key={drink.idDrink}>
              <img
                src={drink.strDrinkThumb}
                width="35"
                height="35"
                alt={drink.strDrink}
              />
              {drink.strDrink}
            </ShoppingItem>
          ))}
        </ShoppingItemList>
        <button onClick={getIngredients}>Generate list of ingredients</button>
        <SubHeading>Ingredients to buy:</SubHeading>
        <ShoppingItemList role="list">
          {ingredients &&
            ingredients.map(ing => (
              <ShoppingItem key={ing}>
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${ing}-Small.png`}
                  width="35"
                  height="35"
                  alt={ing}
                />
                {ing}
              </ShoppingItem>
            ))}
        </ShoppingItemList>
      </ShoppingListContainer>
      <Navigation />
    </PageContainer>
  );

  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return drinks.filter(drink => regex.test(drink.strDrink)).slice(0, 5);
  }

  function getSuggestionValue(suggestion) {
    return suggestion.strDrink;
  }

  function renderSuggestion(suggestion) {
    return (
      <DrinkButton onClick={() => handleSuggestionClick(suggestion)}>
        {suggestion.strDrink}
      </DrinkButton>
    );
  }

  function handleSuggestionClick(suggestion) {
    setSelectedDrinks([...selectedDrinks, suggestion]);
    setTimeout(() => {
      setValue('');
    }, 200);
  }

  function getIngredients() {
    const filteredObjects = selectedDrinks.map(object =>
      Object.fromEntries(
        Object.entries(object).filter(([key]) => key.includes('Ingredient'))
      )
    );
    const ingredientsArray = filteredObjects.map(obj => Object.values(obj));
    const listOfIngredients = ingredientsArray
      .flat()
      .filter(element => element !== null);
    const filteredIngredients = [...new Set(listOfIngredients)];
    setIngredients(filteredIngredients);
  }
}

const PageContainer = styled.main`
  display: grid;
  grid-template-rows: 48px 1fr;
`;

const ShoppingListContainer = styled.div`
  display: grid;
  gap: 20px;
  margin: 10px;
`;

const ShoppingItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const DrinkButton = styled.button`
  background-color: var(--bg-color-button);
  color: var(--font-color-button);
  border-radius: 5px;
  border: none;
  padding: 5px;
  width: 100%;
`;

const ShoppingItem = styled.li`
  background-color: var(--bg-color-secondary);
  color: var(--font-color-text-dark);
  width: fit-content;
  border-radius: 10px;
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 5px 10px;
  margin: 5px;

  img {
    border-radius: 5px;
    border: 1px solid var(--bg-color-main);
  }
`;

const SubHeading = styled.h3`
  font-weight: bold;
  color: var(--font-color-headlines-bright);
`;
