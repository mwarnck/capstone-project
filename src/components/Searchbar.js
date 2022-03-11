import styled from 'styled-components';

export default function Searchbar({ handleChange }) {
  return (
    <SearchbarContainer>
      <InputLabel htmlFor="searchInput">Search for your Drink:</InputLabel>
      <InputField
        type="text"
        id="searchInput"
        name="searchInput"
        onChange={handleChange}
        placeholder="e.g. Caipirinha..."
        maxLength={30}
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
  color: #f28d35;
  font-weight: bold;
  padding-left: 10px;
`;

const InputField = styled.input`
  border-radius: 5px;
  font-size: 16px;
  height: 35px;
  padding-left: 10px;
  margin-top: 0;
`;
