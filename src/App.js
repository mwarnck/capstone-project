import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import DrinkListPage from './pages/DrinkListPage.js';
import BookmarksPage from './pages/BookmarksPage.js';
import MyDrinksPage from './pages/MyDrinksPage.js';
import RandomDrinkPage from './pages/RandomDrinkPage.js';
import DrinkPage from './components/DrinkPage.js';
import LoadingScreen from './components/LoadingScreen.js';
import CreateDrinkForm from './components/CreateDrinkForm.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedDrinks, setFetchedDrinks] = useState(loadFromLocal('drinks'));
  const [searchValue, setSearchValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentFilterBookmarks, setCurrentFilterBookmarks] = useState('all');
  const [commentValue, setCommentValue] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    saveToLocal('drinks', fetchedDrinks);
    if (!fetchedDrinks) {
      getDrinks();
    }
  }, [fetchedDrinks]);

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <AppGrid>
        <main>
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
            <Route
              path="/myDrinks"
              element={
                <MyDrinksPage
                  drinks={fetchedDrinks}
                  toggleBookmark={toggleBookmark}
                  deleteOwnDrink={deleteOwnDrink}
                />
              }
            />
            <Route
              path="/createDrinkForm"
              element={<CreateDrinkForm addNewDrink={addNewDrink} />}
            />
            <Route path="/randomDrink" element={<RandomDrinkPage />} />
            {fetchedDrinks.map(drink => (
              <Route
                key={drink.idDrink}
                path={`${drink.idDrink}`}
                element={
                  <DrinkPage
                    drink={drink}
                    toggleBookmark={toggleBookmark}
                    saveRatingToDrink={saveRatingToDrink}
                    handleSubmitComment={handleSubmitComment}
                    commentValue={commentValue}
                    setCommentValue={setCommentValue}
                  />
                }
              />
            ))}
          </Routes>
        </main>
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

  function saveRatingToDrink(index, id) {
    setFetchedDrinks(
      fetchedDrinks.map(drink => {
        if (drink.idDrink === id) {
          return { ...drink, rating: index };
        } else {
          return drink;
        }
      })
    );
  }

  function handleSubmitComment(commentValue, id) {
    const newComment = {
      commentId: nanoid(),
      commentText: commentValue,
    };
    setFetchedDrinks(
      fetchedDrinks.map(drink => {
        if (drink.comments) {
          if (drink.idDrink === id) {
            return { ...drink, comments: [...drink.comments, newComment] };
          } else {
            return drink;
          }
        } else {
          if (drink.idDrink === id) {
            return { ...drink, comments: [newComment] };
          } else {
            return drink;
          }
        }
      })
    );
    setCommentValue('');
  }

  function deleteOwnDrink(id) {
    setFetchedDrinks(fetchedDrinks.filter(drink => drink.idDrink !== id));
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

  function addNewDrink(newDrink) {
    setFetchedDrinks([...fetchedDrinks, newDrink]);
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

  main {
    padding-bottom: 50px;
  }
`;
