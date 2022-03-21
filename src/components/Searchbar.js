import styled from 'styled-components';

export default function Searchbar({ handleChangeSearch, searchValue }) {
  return (
    <SearchbarContainer>
      <InputLabel htmlFor="searchInput">Search for your Drink:</InputLabel>
      <InputField
        type="text"
        id="searchInput"
        name="searchInput"
        onChange={handleChangeSearch}
        placeholder="e.g. Caipirinha..."
        maxLength={30}
        value={searchValue}
      ></InputField>
    </SearchbarContainer>
  );
}

const SearchbarContainer = styled.div`
  display: grid;
  border-radius: 5px;
  padding-top: 10px;
`;

const InputLabel = styled.label`
  font-size: 1.2rem;
  color: var(--font-color-headlines-bright);
  font-weight: bold;
  padding-left: 10px;
`;

const InputField = styled.input`
  color: var(--font-color-text-dark);
  border-radius: 5px;
  height: 35px;
  padding-left: 10px;
  margin-top: 0;

  &:focus {
    outline: none;
    border-color: var(--bg-color-button);
  }
`;
