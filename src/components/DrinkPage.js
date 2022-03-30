import styled from 'styled-components';
import { useNavigate } from 'react-router';
import StarRating from './StarRating.js';
import CommentBox from './CommentBox.js';
import bookmarkActive from '../icons/drinkBookmarkActive.svg';
import bookmarkInactive from '../icons/drinkBookmarkWhite.svg';
import goBackArrow from '../icons/goBackArrow.svg';

export default function DrinkPage({
  drink,
  toggleBookmark,
  saveRatingToDrink,
  handleSubmitComment,
  commentValue,
  setCommentValue,
}) {
  const navigate = useNavigate();
  const rating = drink.rating ?? 0;

  return (
    <DrinkContainer>
      <GoBackArrow onClick={() => navigate(-1)}>
        <img src={goBackArrow} width="40" height="40" alt="go back arrow" />
        <span className="sr-only">Go back arrow</span>
      </GoBackArrow>
      <DrinkName>{drink.strDrink}</DrinkName>
      <BookmarkButton
        type="button"
        data-testid="bookmark"
        onClick={() => toggleBookmark(drink.idDrink)}
      >
        {drink.isBookmarked ? (
          <img
            src={bookmarkActive}
            width="35"
            height="35"
            alt="active bookmark icon"
          />
        ) : (
          <img
            src={bookmarkInactive}
            width="35"
            height="35"
            alt="inactive bookmark icon"
          />
        )}
        <span className="sr-only">Bookmark</span>
      </BookmarkButton>
      <ShortFactsList role="list">
        <li>{drink.strCategory}</li>
        <li>{drink.strAlcoholic}</li>
        <li>{drink.strGlass}</li>
      </ShortFactsList>
      <DrinkImage
        src={
          drink.strDrinkThumb === ''
            ? 'https://source.unsplash.com/random/100×100/?cocktail'
            : drink.strDrinkThumb
        }
        alt={drink.strDrink}
        width={250}
        height={250}
      ></DrinkImage>
      <IngredientsContainer>
        <SubHeading>Ingredients:</SubHeading>
        <IngredientsList role="list">
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient1}</strong>
            </dt>
            <dd>{drink.strMeasure1}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient2}</strong>
            </dt>
            <dd>{drink.strMeasure2}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient3}</strong>
            </dt>
            <dd>{drink.strMeasure3}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient4}</strong>
            </dt>
            <dd>{drink.strMeasure4}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient5}</strong>
            </dt>
            <dd>{drink.strMeasure5}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient6}</strong>
            </dt>
            <dd>{drink.strMeasure6}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient7}</strong>
            </dt>
            <dd>{drink.strMeasure7}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient8}</strong>
            </dt>
            <dd>{drink.strMeasure8}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient9}</strong>
            </dt>
            <dd>{drink.strMeasure9}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient10}</strong>
            </dt>
            <dd>{drink.strMeasure10}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient11}</strong>
            </dt>
            <dd>{drink.strMeasure11}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient12}</strong>
            </dt>
            <dd>{drink.strMeasure12}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient13}</strong>
            </dt>
            <dd>{drink.strMeasure13}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient14}</strong>
            </dt>
            <dd>{drink.strMeasure14}</dd>
          </IngredientMeasureWrapper>
          <IngredientMeasureWrapper>
            <dt>
              <strong>{drink.strIngredient15}</strong>
            </dt>
            <dd>{drink.strMeasure15}</dd>
          </IngredientMeasureWrapper>
        </IngredientsList>
      </IngredientsContainer>
      <InstructionsContainer>
        <SubHeading>Instructions:</SubHeading>
        <DrinkInstruction>{drink.strInstructions}</DrinkInstruction>
      </InstructionsContainer>
      <StarRating
        rating={rating}
        saveRatingToDrink={saveRatingToDrink}
        id={drink.idDrink}
      />
      <CommentBox
        comments={drink.comments}
        handleSubmitComment={handleSubmitComment}
        id={drink.idDrink}
        commentValue={commentValue}
        setCommentValue={setCommentValue}
      />
    </DrinkContainer>
  );
}

const DrinkContainer = styled.div`
  display: grid;
  gap: 25px;
  place-items: center;
  padding-top: 40px;
  position: relative;
`;

const GoBackArrow = styled.button`
  position: absolute;
  top: 20px;
  left: 25px;
  background-color: var(--bg-color-main);
  border-style: none;
`;

const BookmarkButton = styled.button`
  position: absolute;
  right: 25px;
  top: 20px;
  border-style: none;
  background-color: var(--bg-color-main);
`;

const DrinkName = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: var(--font-color-headlines-bright);
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
    background-color: var(--bg-color-secondary);
    color: var(--font-color-text-dark);
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

const SubHeading = styled.h3`
  font-weight: bold;
  color: var(--font-color-headlines-bright);
`;

const IngredientsList = styled.dl`
  font-size: 0.9rem;
`;

const InstructionsContainer = styled.div`
  margin: 5px auto;
  min-width: 220px;
  max-width: 70%;
`;

const DrinkInstruction = styled.p`
  margin-top: 15px;
  font-size: 0.9rem;
`;
