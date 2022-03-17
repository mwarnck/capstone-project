import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import bookmarkActive from '../icons/sunBookmarkActive.svg';
import bookmarkInactive from '../icons/sunBookmarkInactive.svg';

export default function DrinkCard({ drink, toggleBookmark }) {
  return (
    <DrinkContainer>
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
      <LinkContainer to={`/${drink.idDrink}`}>
        <Wrapper>
          <DrinkImage
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            width={100}
            height={100}
          ></DrinkImage>
          <WrapperNameShortFacts>
            <DrinkName>{drink.strDrink}</DrinkName>
            <ShortFacts>
              <li>{drink.strAlcoholic}</li>
              <li>{drink.strCategory}</li>
              <li>{drink.strGlass}</li>
            </ShortFacts>
          </WrapperNameShortFacts>
        </Wrapper>
      </LinkContainer>
    </DrinkContainer>
  );
}

const DrinkContainer = styled.section`
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f4f2e8;
  margin-bottom: 0;
  padding-top: 10px;
  position: relative;
`;

const BookmarkButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border-style: none;
  background-color: #f4f2e8;
`;

const DrinkName = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-decoration: none;
  color: #f28d35;
  font-size: 1.2rem;
`;

const LinkContainer = styled(NavLink)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  padding-left: 10px;
  padding-right: 15px;
  margin-bottom: 10px;
`;

const WrapperNameShortFacts = styled.div`
  padding-right: 10px;
`;

const DrinkImage = styled.img`
  border-radius: 5px;
`;

const ShortFacts = styled.ul`
  list-style: disc inside;
  font-size: 0.9rem;
  color: #000;
  text-decoration: none;

  li {
    margin-top: 5px;
  }
`;
