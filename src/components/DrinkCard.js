import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DeleteModal from './DeleteModal.js';
import bookmarkActive from '../icons/drinkBookmarkActive.svg';
import bookmarkInactive from '../icons/drinkBookmarkBlack.svg';
import deleteIcon from '../icons/deleteIcon.svg';
import editIcon from '../icons/editIcon.svg';
import { useState } from 'react';

export default function DrinkCard({
  drink,
  toggleBookmark,
  deleteOwnDrink,
  redirectToEditPage,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <DrinkContainer>
      <BookmarkButton
        type="button"
        onClick={() => toggleBookmark(drink.idDrink)}
      >
        {drink.isBookmarked ? (
          <img
            src={bookmarkActive}
            width="30"
            height="30"
            alt="active bookmark icon"
          />
        ) : (
          <img
            src={bookmarkInactive}
            width="30"
            height="30"
            alt="inactive bookmark icon"
          />
        )}
        <span className="sr-only">Bookmark</span>
      </BookmarkButton>
      {drink.isMyDrink && (
        <DeleteButton type="button" onClick={() => setShowDeleteModal(true)}>
          <img src={deleteIcon} width="25" height="25" alt="delete icon" />
        </DeleteButton>
      )}
      {showDeleteModal && (
        <DeleteModal
          confirmDeleteDrink={() => deleteOwnDrink(drink.idDrink)}
          cancelDeleteDrink={() => setShowDeleteModal(false)}
        />
      )}
      {drink.isMyDrink && (
        <EditButton type="button" onClick={() => redirectToEditPage(drink)}>
          <img src={editIcon} width="25" height="25" alt="edit icon" />
        </EditButton>
      )}
      <LinkContainer to={`/${drink.idDrink}`}>
        <Wrapper>
          <DrinkImage
            src={
              drink.strDrinkThumb ??
              'https://source.unsplash.com/random/100×100/?cocktail'
            }
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
  border: 1px solid var(--bg-color-secondary);
  border-radius: 5px;
  background-color: var(--bg-color-secondary);
  box-shadow: 0px 5px 10px var(--font-color-text-bright);
  margin-bottom: 0;
  padding-top: 10px;
  position: relative;
`;

const BookmarkButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border-style: none;
  background-color: var(--bg-color-secondary);
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 5px;
  bottom: 5px;
  border-style: none;
  background-color: var(--bg-color-secondary);
`;

const EditButton = styled(DeleteButton)`
  bottom: 40px;
`;

const DrinkName = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-decoration: none;
  color: var(--bg-color-button);
  font-size: 1.1rem;
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
  color: var(--font-color-text-dark);
  text-decoration: none;

  li {
    margin-top: 5px;
  }
`;
