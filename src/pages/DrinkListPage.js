import styled from 'styled-components';
import DrinkCard from '../components/DrinkCard.js';
import Header from '../components/Header.js';

export default function DrinkList({ drinks }) {
  return (
    <PageContainer>
      <Header />
      <DrinklistContainer>
        {drinks &&
          drinks.map(drink => <DrinkCard key={drink.idDrink} drink={drink} />)}
      </DrinklistContainer>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
  grid-template-rows: 48px 1fr;
  height: 100vh;
`;

const DrinklistContainer = styled.section`
  display: grid;
  gap: 10px;
  overflow-y: auto;
`;
