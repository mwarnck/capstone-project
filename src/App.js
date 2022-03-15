import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header.js';
import DrinkListPage from './pages/DrinkListPage.js';
import BookmarksPage from './pages/BookmarksPage.js';
import LoadingPage from './pages/LoadingPage.js';
import Navigation from './components/Navigation.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedDrinks, setFetchedDrinks] = useState(loadFromLocal('drinks'));
  const [searchValue, setSearchValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentFilterBookmarks, setCurrentFilterBookmarks] = useState('all');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    saveToLocal('drinks', fetchedDrinks);
    if (!fetchedDrinks) {
      getDrinks();
    }
  }, [fetchedDrinks]);

  if (isLoading) {
    return <LoadingPage />;
  } else {
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
                  searchValue={searchValue}
                  handleChangeSearch={handleChangeSearch}
                  handleChangeFilter={handleChangeFilter}
                  currentFilter={currentFilter}
                  toggleBookmark={toggleBookmark}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <BookmarksPage
                  drinks={fetchedDrinks}
                  handleChangeFilterBookmarks={handleChangeFilterBookmarks}
                  currentFilterBookmarks={currentFilterBookmarks}
                  toggleBookmark={toggleBookmark}
                />
              }
            />
          </Routes>
        </PageContainer>
        <Navigation />
      </AppGrid>
    );
  }

  async function getDrinks() {
    try {
      const response = await fetch('recipes.json');
      const data = await response.json();
      setFetchedDrinks(data.drinks);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }

  function toggleBookmark(id) {
    setFetchedDrinks(
      fetchedDrinks.map(drink => {
        if (drink.idDrink === id) {
          return { ...drink, isBookmarked: !drink.isBookmarked };
        } else {
          return drink;
        }
      })
    );
  }

  function handleChangeSearch(event) {
    setSearchValue(event.target.value.toLowerCase());
  }

  function handleChangeFilter(value) {
    setCurrentFilter(value);
  }

  function handleChangeFilterBookmarks(value) {
    setCurrentFilterBookmarks(value);
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
    }
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
