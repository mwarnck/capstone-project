import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function RandomDrinkPage() {
  const [randomDrink, setRandomDrink] = useState({});

  useEffect(() => {
    getRandomDrink();
  }, []);

  return (
    <DrinkContainer>
      <RandomDrinkButton onClick={getRandomDrink}>
        Mix a drink!
      </RandomDrinkButton>
      <DrinkName>{randomDrink.strDrink}</DrinkName>
      <ShortFactsList role="list">
        <li>{randomDrink.strCategory}</li>
        <li>{randomDrink.strAlcoholic}</li>
        <li>{randomDrink.strGlass}</li>
      </ShortFactsList>
      <DrinkImage
        src={randomDrink.strDrinkThumb}
        alt={randomDrink.strDrink}
        width={250}
        height={250}
      ></DrinkImage>
      <IngredientsContainer>
        <SubHeading>Ingredients:</SubHeading>
        <IngredientsList role="list">
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient1}</strong>
            </dt>
            <dd>{randomDrink.strMeasure1}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient2}</strong>
            </dt>
            <dd>{randomDrink.strMeasure2}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient3}</strong>
            </dt>
            <dd>{randomDrink.strMeasure3}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient4}</strong>
            </dt>
            <dd>{randomDrink.strMeasure4}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient5}</strong>
            </dt>
            <dd>{randomDrink.strMeasure5}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient6}</strong>
            </dt>
            <dd>{randomDrink.strMeasure6}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient7}</strong>
            </dt>
            <dd>{randomDrink.strMeasure7}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient8}</strong>
            </dt>
            <dd>{randomDrink.strMeasure8}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient9}</strong>
            </dt>
            <dd>{randomDrink.strMeasure9}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient10}</strong>
            </dt>
            <dd>{randomDrink.strMeasure10}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient11}</strong>
            </dt>
            <dd>{randomDrink.strMeasure11}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient12}</strong>
            </dt>
            <dd>{randomDrink.strMeasure12}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient13}</strong>
            </dt>
            <dd>{randomDrink.strMeasure13}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient14}</strong>
            </dt>
            <dd>{randomDrink.strMeasure14}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{randomDrink.strIngredient15}</strong>
            </dt>
            <dd>{randomDrink.strMeasure15}</dd>
          </IngredientMeasureWrapper>
        </IngredientsList>
      </IngredientsContainer>
      <InstructionsContainer>
        <SubHeading>Instructions:</SubHeading>
        <DrinkInstruction data-testid="instructions">
          {randomDrink.strInstructions}
        </DrinkInstruction>
      </InstructionsContainer>
    </DrinkContainer>
  );

  async function getRandomDrink() {
    try {
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
      );
      const data = await response.json();
      setRandomDrink(data.drinks[0]);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }
}

const DrinkContainer = styled.div`
  display: grid;
  gap: 25px;
  place-items: center;
  padding-top: 20px;
  position: relative;
`;

const RandomDrinkButton = styled.button`
  border-radius: 5px;
  height: 40px;
  font-size: 1.1rem;
  font-family: sans-serif;
  color: #fff;
  background-color: #0392b0;
  border: 2px solid #0392b0;
  padding: 0 20px;

  &:focus,
  &:hover {
    outline: none;
    border-color: #f28d35;
  }
`;

const DrinkName = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #f28d35;
  max-width: 200px;
  text-align: center;
`;

const ShortFactsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  li {
    font-size: 0.9rem;
    border-radius: 20px;
    padding: 5px 8px;
    background-color: #f28d35;
    color: #fff;
  }
`;

const DrinkImage = styled.img`
  border-radius: 5px;
`;

const IngredientsContainer = styled.div`
  display: grid;
  gap: 10px;
`;

const IngredientMeasureWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
`;

const SubHeading = styled.p`
  font-weight: bold;
  color: #f28d35;
`;

const IngredientsList = styled.dl`
  font-size: 0.9rem;
`;

const InstructionsContainer = styled.div`
  display: grid;
  gap: 10px;
  margin: 5px 10px 20px;
`;

const DrinkInstruction = styled.p`
  font-size: 0.9rem;
`;
