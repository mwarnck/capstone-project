import styled from 'styled-components';

export default function DrinkCard({ drink }) {
  return (
    <DrinkContainer>
      <DrinkName>{drink.strDrink}</DrinkName>
      <Wrapper>
        <DrinkImage
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          width={200}
          height={200}
        ></DrinkImage>
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
        <DrinkInstruction>{drink.strInstructions}</DrinkInstruction>
      </Wrapper>
    </DrinkContainer>
  );
}

const DrinkContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background-color: #d6fcf9;
`;

const DrinkName = styled.h2`
  padding-left: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #f28d35;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 20px;
  padding-right: 20px;
`;

const DrinkImage = styled.img`
  border-radius: 5px;
  margin-bottom: 20px;
`;

const IngredientsList = styled.ul`
  list-style: none;
  font-size: 0.8rem;
  padding-right: 20px;
  padding-left: 20px;
`;

const DrinkInstruction = styled.p`
  padding-left: 20px;
  padding-right: 20px;
  max-width: 600px;
  font-size: 0.9rem;
`;
