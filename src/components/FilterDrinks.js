import styled from 'styled-components';

export default function FilterDrinks({ handleChangeFilter, currentFilter }) {
  return (
    <FilterContainer>
      <fieldset>
        <FilterLegend id="filterLegend">Filter by:</FilterLegend>
        <LabelAll htmlFor="filterAll" currentFilter={currentFilter}>
          All
        </LabelAll>
        <FilterButton
          type="radio"
          id="filterAll"
          name="filterDrinks"
          value="all"
          onChange={({ target: { value } }) => handleChangeFilter(value)}
        ></FilterButton>
        <LabelAlcoholic htmlFor="filterAlcoholic" currentFilter={currentFilter}>
          Alcoholic
        </LabelAlcoholic>
        <FilterButton
          type="radio"
          id="filterAlcoholic"
          name="filterDrinks"
          value="alcoholic"
          onChange={({ target: { value } }) => handleChangeFilter(value)}
        ></FilterButton>
        <LabelNonAlcoholic
          htmlFor="filterNonAlcoholic"
          currentFilter={currentFilter}
        >
          Non-Alcoholic
        </LabelNonAlcoholic>
        <FilterButton
          type="radio"
          id="filterNonAlcoholic"
          name="filterDrinks"
          value="non alcoholic"
          onChange={({ target: { value } }) => handleChangeFilter(value)}
        ></FilterButton>
      </fieldset>
    </FilterContainer>
  );
}

const FilterContainer = styled.form`
  border-radius: 5px;
  padding-top: 10px;

  fieldset {
    display: flex;
    justify-content: space-around;
    border: 2px solid;
    padding: 10px 10px;
    border: 1px solid var(--font-color-headlines-bright);
  }
`;

const FilterLegend = styled.legend`
  font-size: 1.2rem;
  color: var(--font-color-headlines-bright);
  font-weight: bold;
  padding-left: 10px;
`;

const FilterButton = styled.input`
  display: none;
`;

const LabelAll = styled.label`
  background-color: ${props =>
    props.currentFilter === 'all'
      ? 'var(--bg-color-button)'
      : 'var(--bg-color-secondary)'};
  color: ${props =>
    props.currentFilter === 'all'
      ? 'var(--font-color-headlines-bright)'
      : 'var(--font-color-headlines-dark)'};
  border-radius: 5px;
  padding: 6px 15px;
`;

const LabelAlcoholic = styled(LabelAll)`
  background-color: ${props =>
    props.currentFilter === 'alcoholic'
      ? 'var(--bg-color-button)'
      : 'var(--bg-color-secondary)'};
  color: ${props =>
    props.currentFilter === 'alcoholic'
      ? 'var(--font-color-headlines-bright)'
      : 'var(--font-color-headlines-dark)'};
`;

const LabelNonAlcoholic = styled(LabelAll)`
  background-color: ${props =>
    props.currentFilter === 'non alcoholic'
      ? 'var(--bg-color-button)'
      : 'var(--bg-color-secondary)'};
  color: ${props =>
    props.currentFilter === 'non alcoholic'
      ? 'var(--font-color-headlines-bright)'
      : 'var(--font-color-headlines-dark)'};
`;
