import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import { useState } from 'react';

export default function ShoppingListPage({ drinks }) {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  console.log(suggestions);
  console.log(value);

  const escapeRegexCharacters = str =>
    str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

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
      <Navigation />
    </PageContainer>
  );

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
    return <span>{suggestion.strDrink}</span>;
  }
}

const PageContainer = styled.main`
  display: grid;
  grid-template-rows: 48px 1fr;
`;
