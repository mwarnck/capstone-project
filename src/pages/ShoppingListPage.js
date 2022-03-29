import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';
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
        highlightFirstSuggestion={true}
      />

      <ul>
        Selected drinks:
        {selectedDrinks.map(drink => (
          <li key={drink.idDrink}>{drink.strDrink}</li>
        ))}
      </ul>
      <button onClick={getIngredients}>Generate list of ingredients</button>
      <ul>{ingredients && ingredients.map(ing => <li key={ing}>{ing}</li>)}</ul>
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

    return drinks.filter(drink => regex.test(drink.strDrink));
  }

  function getSuggestionValue(suggestion) {
    return suggestion.strDrink;
  }

  function renderSuggestion(suggestion) {
    return (
      <button onClick={() => handleSuggestionClick(suggestion)}>
        {suggestion.strDrink}
      </button>
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
  grid-template-rows: 48px 1fr 1fr;
`;
