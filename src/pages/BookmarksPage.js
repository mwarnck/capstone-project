import styled from 'styled-components';
import DrinkCard from '../components/DrinkCard.js';

export default function BookmarksList({ drinks, toggleBookmark }) {
  return (
    <DrinklistContainer>
      {drinks &&
        drinks
          .filter(drink => drink.isBookmarked === true)
          .map(drink => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
              toggleBookmark={toggleBookmark}
            />
          ))}
    </DrinklistContainer>
  );
}

const DrinklistContainer = styled.section`
  display: grid;
  gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 0;
  margin-top: 0;
`;
