import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ShoppingListPage from './ShoppingListPage';

describe('ShoppingListPage', () => {
  it('renders a button, three h3 and two ul elements', () => {
    render(
      <MemoryRouter>
        <ShoppingListPage />
      </MemoryRouter>
    );

    const shoppingListButton = screen.getByRole('button', {
      name: /generate/i,
    });
    expect(shoppingListButton).toBeInTheDocument();

    const shoppingLists = screen.getAllByRole('list');
    expect(shoppingLists).toHaveLength(2);

    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(3);
  });
});
