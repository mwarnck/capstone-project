import styled from 'styled-components';
import Header from '../components/Header.js';
import DrinkCard from '../components/DrinkCard.js';
import Searchbar from '../components/Searchbar.js';
import FilterDrinks from '../components/FilterDrinks.js';

export default function DrinkListPage({
  drinks,
  toggleBookmark,
  searchValue,
  handleChangeSearch,
  handleChangeFilter,
  currentFilter,
}) {
  return (
    <PageContainer>
      <Header>Cocktail Night</Header>
      <DrinklistContainer>
        <Searchbar
          handleChangeSearch={handleChangeSearch}
          searchValue={searchValue}
        />
        <FilterDrinks
          handleChangeFilter={handleChangeFilter}
          currentFilter={currentFilter}
        />
        {drinks &&
          drinks
            .filter(drink =>
              drink.strDrink.trim().toLowerCase().includes(searchValue.trim())
            )
            .filter(
              drink =>
                drink.strAlcoholic.toLowerCase() === currentFilter ||
                currentFilter === 'all'
            )
            .map(drink => (
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
                toggleBookmark={toggleBookmark}
              />
            ))}
        {drinks &&
          drinks.filter(drink =>
            drink.strDrink.trim().toLowerCase().includes(searchValue)
          ).length < 1 && (
            <EmptyState>
              There are no results for your search input...
            </EmptyState>
          )}
      </DrinklistContainer>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
  grid-template-rows: 48px 1fr;
`;

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
