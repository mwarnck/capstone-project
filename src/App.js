import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import DrinkListPage from './pages/DrinkListPage.js';
import BookmarksPage from './pages/BookmarksPage.js';
import MyDrinksPage from './pages/MyDrinksPage.js';
import RandomDrinkPage from './pages/RandomDrinkPage.js';
import DrinkPage from './components/DrinkPage.js';
import LoadingScreen from './components/LoadingScreen.js';
import CreateDrinkPage from './pages/CreateDrinkPage.js';
import EditDrinkPage from './pages/EditDrinkPage.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedDrinks, setFetchedDrinks] = useState(loadFromLocal('drinks'));
  const [searchValue, setSearchValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentFilterBookmarks, setCurrentFilterBookmarks] = useState('all');
  const [commentValue, setCommentValue] = useState('');
  const [drinkToEdit, setDrinkToEdit] = useState(null);
  const navigate = useNavigate();

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
                  redirectToEditPage={redirectToEditPage}
                />
              }
            />
            <Route
              path="/createDrinkPage"
              element={<CreateDrinkPage handleNewDrink={addNewDrink} />}
            />
            <Route
              path="/editDrinkPage"
              element={
                <EditDrinkPage
                  handleNewDrink={editDrink}
                  drinkToEdit={drinkToEdit}
                />
              }
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
        if (drink.idDrink === id) {
          if (drink.comments) {
            return { ...drink, comments: [...drink.comments, newComment] };
          } else {
            return { ...drink, comments: [newComment] };
          }
        } else {
          return drink;
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

  function editDrink(newDrink) {
    setFetchedDrinks(
      fetchedDrinks.map(drink => {
        if (drink.idDrink === newDrink.idDrink) {
          return {
            ...drink,
            strDrink: newDrink.strDrink,
            strCategory: newDrink.strCategory,
            strAlcoholic: newDrink.strAlcoholic,
            strGlass: newDrink.strGlass,
            strInstructions: newDrink.strInstructions,
            strIngredient1: newDrink.strIngredient1,
            strIngredient2: newDrink.strIngredient2,
            strIngredient3: newDrink.strIngredient3,
            strIngredient4: newDrink.strIngredient4,
            strIngredient5: newDrink.strIngredient5,
            strMeasure1: newDrink.strMeasure1,
            strMeasure2: newDrink.strMeasure2,
            strMeasure3: newDrink.strMeasure3,
            strMeasure4: newDrink.strMeasure4,
            strMeasure5: newDrink.strMeasure5,
          };
        } else {
          return drink;
        }
      })
    );
    setDrinkToEdit(null);
  }

  function redirectToEditPage(drink) {
    setDrinkToEdit({ ...drink });
    navigate('/editDrinkPage');
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
