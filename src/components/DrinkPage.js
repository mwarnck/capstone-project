import styled from 'styled-components';
import bookmarkActive from '../icons/sunBookmarkActive.svg';
import bookmarkInactive from '../icons/sunBookmarkInactive.svg';

export default function DrinkPage({ drink, toggleBookmark }) {
  return (
    <DrinkContainer>
      <DrinkName>{drink.strDrink}</DrinkName>
      <BookmarkButton
        type="button"
        onClick={() => toggleBookmark(drink.idDrink)}
      >
        {drink.isBookmarked ? (
          <img
            src={bookmarkActive}
            width="25"
            height="25"
            alt="active bookmark icon"
          />
        ) : (
          <img
            src={bookmarkInactive}
            width="25"
            height="25"
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
        src={drink.strDrinkThumb}
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
    </DrinkContainer>
  );
}

const DrinkContainer = styled.div`
  display: grid;
  gap: 25px;
  place-items: center;
  padding-top: 20px;
  position: relative;
`;

const BookmarkButton = styled.button`
  position: absolute;
  right: 25px;
  top: 10px;
  border-style: none;
  background-color: #fff;
`;

const DrinkName = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #f28d35;
`;

const ShortFactsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  li {
    font-size: 0.9rem;
    border: 1px solid black;
    border-radius: 20px;
    padding: 3px;
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
