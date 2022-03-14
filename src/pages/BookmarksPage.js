import styled from 'styled-components';
import DrinkCard from '../components/DrinkCard.js';
import FilterDrinks from '../components/FilterDrinks.js';

export default function BookmarksPage({
  drinks,
  toggleBookmark,
  currentFilterBookmarks,
  handleChangeFilterBookmarks,
}) {
  return (
    <DrinklistContainer>
      <FilterDrinks
        handleChangeFilter={handleChangeFilterBookmarks}
        currentFilter={currentFilterBookmarks}
      />
      {drinks &&
        drinks
          .filter(drink => drink.isBookmarked === true)
          .filter(
            drink =>
              drink.strAlcoholic.toLowerCase() === currentFilterBookmarks ||
              currentFilterBookmarks === 'all'
          )
          .map(drink => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
              toggleBookmark={toggleBookmark}
            />
          ))}
      {drinks.filter(drink => drink.isBookmarked === true).length < 1 && (
        <EmptyState>
          There is nothing on your favorites list at the moment. Start with
          adding your Drinks by clicking on the sun icon.
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
