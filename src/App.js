import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header.js';
import DrinkListPage from './pages/DrinkListPage.js';
import BookmarksPage from './pages/BookmarksPage.js';
import Navigation from './components/Navigation.js';

function App() {
  const [fetchedDrinks, setFetchedDrinks] = useState([]);

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <AppGrid>
      <Header>Cocktail Night</Header>
      <PageContainer>
        <Routes>
          <Route
            path="/"
            element={
              <DrinkListPage
                drinks={fetchedDrinks}
                toggleBookmark={toggleBookmark}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <BookmarksPage
                drinks={fetchedDrinks}
                toggleBookmark={toggleBookmark}
              />
            }
          />
        </Routes>
      </PageContainer>
      <Navigation />
    </AppGrid>
  );

  async function getDrinks() {
    try {
      const response = await fetch('recipes.json');
      const data = await response.json();
      setFetchedDrinks(data.drinks);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }

  function toggleBookmark(index) {
    const drinkId = fetchedDrinks[index].idDrink;
    setFetchedDrinks(
      fetchedDrinks.map(drink => {
        if (drink.idDrink === drinkId) {
          return { ...drink, isBookmarked: !drink.isBookmarked };
        } else {
          return drink;
        }
      })
    );
    console.log(drinkId);
  }
}

export default App;

const AppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 48px 1fr 48px;
`;

const PageContainer = styled.main`
  overflow-y: auto;
`;
