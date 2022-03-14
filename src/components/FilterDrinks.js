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
          onChange={handleChangeFilter}
        ></FilterButton>
        <LabelAlcoholic htmlFor="filterAlcoholic" currentFilter={currentFilter}>
          Alcoholic
        </LabelAlcoholic>
        <FilterButton
          type="radio"
          id="filterAlcoholic"
          name="filterDrinks"
          value="alcoholic"
          onChange={handleChangeFilter}
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
          onChange={handleChangeFilter}
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
    border: 1px solid black;
  }
`;

const FilterLegend = styled.legend`
  font-size: 1.2rem;
  color: #f28d35;
  font-weight: bold;
  padding-left: 10px;
`;

const FilterButton = styled.input`
  display: none;
`;

const LabelAll = styled.label`
  background-color: ${props =>
    props.currentFilter === 'all' ? '#f28d35' : '#0392b0'};
  color: ${props => (props.currentFilter === 'all' ? '#fff' : '#000')};
  border-radius: 5px;
  padding: 6px 15px;
`;

const LabelAlcoholic = styled.label`
  background-color: ${props =>
    props.currentFilter === 'alcoholic' ? '#f28d35' : '#0392b0'};
  color: ${props => (props.currentFilter === 'alcoholic' ? '#fff' : '#000')};
  border-radius: 5px;
  padding: 6px 15px;
`;

const LabelNonAlcoholic = styled.label`
  background-color: ${props =>
    props.currentFilter === 'non alcoholic' ? '#f28d35' : '#0392b0'};
  color: ${props =>
    props.currentFilter === 'non alcoholic' ? '#fff' : '#000'};
  border-radius: 5px;
  padding: 6px 15px;
`;
