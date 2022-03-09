import { useState } from 'react';
import styled from 'styled-components';

export default function DrinkCard({ drink }) {
  const [detailsVisable, setDetailsVisable] = useState(false);

  return (
    <DrinkContainer>
      <DrinkName>{drink.strDrink}</DrinkName>
      <BookmarkButton>
        {drink.isBookmarked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 64 64"
          >
            <path
              fill="#ffe62e"
              d="m20.5 59.7l7-7.2c-2.5-.5-4.8-1.5-6.9-2.9l-.1 10.1m23-55.4l-7 7.2c2.5.5 4.8 1.5 6.9 2.9l.1-10.1M4.3 43.5l10.1-.1C13 41.3 12 39 11.5 36.5l-7.2 7m55.4-23l-10.1.1c1.3 2.1 2.3 4.4 2.9 6.9l7.2-7m-55.4 0l7.2 7c.5-2.5 1.5-4.8 2.9-6.9l-10.1-.1m55.4 23l-7.2-7c-.5 2.5-1.5 4.8-2.9 6.9l10.1.1M20.5 4.3l.1 10.1c2.1-1.3 4.4-2.3 6.9-2.9l-7-7.2m23 55.4l-.1-10.1C41.3 51 39 52 36.5 52.5l7 7.2"
            />
            <g fill="#ffce31">
              <path d="m14.8 44l-4 9.3l9.3-4C18 47.8 16.2 46 14.8 44m34.4-24l4-9.3l-9.2 4c2 1.5 3.8 3.3 5.2 5.3m-37.8 8.3L2 32l9.4 3.7c-.3-1.2-.4-2.4-.4-3.7s.1-2.5.4-3.7m41.2 7.4L62 32l-9.4-3.7c.2 1.2.4 2.5.4 3.7c0 1.3-.1 2.5-.4 3.7M20 14.8l-9.3-4l4 9.3c1.5-2.1 3.3-3.9 5.3-5.3m24 34.4l9.3 4l-4-9.3C47.8 46 46 47.8 44 49.2m-8.3-37.8L32 2l-3.7 9.4c1.2-.2 2.5-.4 3.7-.4s2.5.1 3.7.4m-7.4 41.2L32 62l3.7-9.4c-1.2.3-2.4.4-3.7.4s-2.5-.1-3.7-.4" />
              <circle cx="32" cy="32" r="19" />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="25"
            height="25"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 64 64"
          >
            <path
              fill="currentColor"
              d="m20.52 59.717l7.027-7.2a20.87 20.87 0 0 1-6.904-2.87l-.123 10.07M43.48 4.284l-7.025 7.199a20.872 20.872 0 0 1 6.904 2.871l.121-10.07m-31.996 32.17l-7.201 7.025l10.07-.122a20.85 20.85 0 0 1-2.869-6.903m41.032-8.907l7.201-7.027l-10.07.123a20.856 20.856 0 0 1 2.869 6.904m-38.162-6.905l-10.07-.123l7.201 7.027a20.805 20.805 0 0 1 2.869-6.904m35.292 22.716l10.07.122l-7.201-7.026a20.814 20.814 0 0 1-2.869 6.904M27.547 11.483l-7.027-7.2l.123 10.07a20.87 20.87 0 0 1 6.904-2.87m8.906 41.034l7.027 7.199l-.123-10.069a20.891 20.891 0 0 1-6.904 2.87m-21.701-8.555l-3.967 9.251l9.252-3.965a21.104 21.104 0 0 1-5.285-5.286m34.496-23.923l3.965-9.252l-9.25 3.965a21.108 21.108 0 0 1 5.285 5.287M11 32c0-1.278.133-2.524.352-3.741L2 31.999l9.352 3.74A21.034 21.034 0 0 1 11 32zm51 0l-9.352-3.741C52.867 29.476 53 30.722 53 32c0 1.279-.133 2.525-.352 3.741L62 32zM20.039 14.751l-9.252-3.965l3.965 9.252a21.149 21.149 0 0 1 5.287-5.287m23.922 34.497l9.252 3.965l-3.965-9.251a21.128 21.128 0 0 1-5.287 5.286M35.74 11.352L32 2l-3.74 9.352C29.475 11.133 30.721 11 32 11s2.525.133 3.74.352m-7.48 41.296L32 62l3.74-9.352c-1.215.219-2.461.352-3.74.352s-2.525-.133-3.74-.352"
            />
            <circle cx="32" cy="32" r="19" fill="currentColor" />
          </svg>
        )}
      </BookmarkButton>
      <Wrapper>
        <WrapperImageButton>
          <DrinkImage
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            width={200}
            height={200}
          ></DrinkImage>
          <DetailsButton type="button" onClick={toggleDetails}>
            {detailsVisable ? 'Hide Details...' : 'Show Details...'}
          </DetailsButton>
        </WrapperImageButton>
        {detailsVisable && (
          <IngredientsList role="list">
            <li>
              <strong>{drink.strIngredient1}</strong> {drink.strMeasure1}
            </li>
            <li>
              <strong>{drink.strIngredient2}</strong> {drink.strMeasure2}
            </li>
            <li>
              <strong>{drink.strIngredient3}</strong> {drink.strMeasure3}
            </li>
            <li>
              <strong>{drink.strIngredient4}</strong> {drink.strMeasure4}
            </li>
            <li>
              <strong>{drink.strIngredient5}</strong> {drink.strMeasure5}
            </li>
            <li>
              <strong>{drink.strIngredient6}</strong> {drink.strMeasure6}
            </li>
            <li>
              <strong>{drink.strIngredient7}</strong> {drink.strMeasure7}
            </li>
            <li>
              <strong>{drink.strIngredient8}</strong> {drink.strMeasure8}
            </li>
            <li>
              <strong>{drink.strIngredient9}</strong> {drink.strMeasure9}
            </li>
            <li>
              <strong>{drink.strIngredient10}</strong> {drink.strMeasure10}
            </li>
            <li>
              <strong>{drink.strIngredient11}</strong> {drink.strMeasure11}
            </li>
            <li>
              <strong>{drink.strIngredient12}</strong> {drink.strMeasure12}
            </li>
            <li>
              <strong>{drink.strIngredient13}</strong> {drink.strMeasure13}
            </li>
            <li>
              <strong>{drink.strIngredient14}</strong> {drink.strMeasure14}
            </li>
            <li>
              <strong>{drink.strIngredient15}</strong> {drink.strMeasure15}
            </li>
          </IngredientsList>
        )}
        {detailsVisable && (
          <DrinkInstruction>{drink.strInstructions}</DrinkInstruction>
        )}
      </Wrapper>
    </DrinkContainer>
  );

  function toggleDetails() {
    setDetailsVisable(!detailsVisable);
  }
}

const DrinkContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background-color: #d6fcf9;
  margin-bottom: 0;
  padding-top: 10px;
  position: relative;
`;

const BookmarkButton = styled.button`
  position: absolute;
  right: 25px;
  top: 10px;
  border-style: none;
  background-color: #d6fcf9;
`;

const DrinkName = styled.h2`
  padding-left: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #f28d35;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 20px;
  padding-right: 20px;
`;

const WrapperImageButton = styled.div`
  display: grid;
  gap: 10px;
`;

const DrinkImage = styled.img`
  border-radius: 5px;
`;

const DetailsButton = styled.button`
  width: 200px;
  height: 20px;
  margin-bottom: 20px;
  background-color: #f28d35;
  box-shadow: none;
  border-radius: 5px;
  color: #0f88f2;
`;

const IngredientsList = styled.ul`
  list-style: none;
  font-size: 0.8rem;
  padding: 0 20px 20px;
`;

const DrinkInstruction = styled.p`
  padding: 0 20px 20px;
  max-width: 600px;
  font-size: 0.9rem;
`;
