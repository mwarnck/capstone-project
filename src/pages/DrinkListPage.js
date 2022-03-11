import styled from 'styled-components';
import DrinkCard from '../components/DrinkCard.js';
import Searchbar from '../components/Searchbar.js';

export default function DrinkListPage({
  drinks,
  toggleBookmark,
  searchValue,
  handleChange,
}) {
  return (
    <DrinklistContainer>
      <Searchbar handleChange={handleChange} />
      {drinks &&
        drinks
          .filter(drink =>
            drink.strDrink.trim().toLowerCase().includes(searchValue)
          )
          .map(drink => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
              toggleBookmark={toggleBookmark}
            />
          ))}
      {drinks.filter(drink =>
        drink.strDrink.trim().toLowerCase().includes(searchValue)
      ).length < 1 && (
        <EmptyState>There are no results for your search input...</EmptyState>
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
