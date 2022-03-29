import styled from 'styled-components';
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';

export default function ShoppingListPage() {
  return (
    <PageContainer>
      <Header>Shopping List</Header>

      <Navigation />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
  grid-template-rows: 48px 1fr;
`;
