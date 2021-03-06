import styled from 'styled-components';
import Header from '../components/Header.js';
import DrinkCard from '../components/DrinkCard.js';
import FilterDrinks from '../components/FilterDrinks.js';
import ScrollToTop from '../components/ScrollToTop.js';
import Navigation from '../components/Navigation.js';

export default function BookmarksPage({
  drinks,
  toggleBookmark,
  deleteOwnDrink,
  redirectToEditPage,
  currentFilterBookmarks,
  handleChangeFilterBookmarks,
}) {
  return (
    <PageContainer>
      <Header>Favorites</Header>
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
                deleteOwnDrink={deleteOwnDrink}
                redirectToEditPage={redirectToEditPage}
              />
            ))}
        {drinks.filter(drink => drink.isBookmarked === true).length < 1 && (
          <EmptyState>
            There is nothing on your favorites list at the moment. Start with
            adding your Drinks by clicking on the sun icon.
          </EmptyState>
        )}
      </DrinklistContainer>
      <ScrollToTop />
      <Navigation />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
  grid-template-rows: 48px 1fr;
`;

const DrinklistContainer = styled.section`
  display: grid;
  gap: 15px;
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
