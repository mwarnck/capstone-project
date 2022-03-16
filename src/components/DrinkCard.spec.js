import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DrinkCard from './DrinkCard';

describe('DrinkCard', () => {
  it('renders name, picture, button and short facts for a drink', () => {
    render(
      <MemoryRouter>
        <DrinkCard
          drink={{
            strDrink: 'Mojito',
            strDrinkThumb:
              'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
            strCategory: 'Cocktail',
            strAlcoholic: 'Alcoholic',
            strGlass: 'Cocktail glass',
          }}
        />
      </MemoryRouter>
    );

    const drinkName = screen.getByRole('heading', { level: 2 });
    expect(drinkName).toHaveTextContent('Mojito');

    const image = screen.getByRole('img', { name: /Mojito/i });
    expect(image).toBeInTheDocument();

    const bookmarkButton = screen.getByRole('button', { name: /bookmark/i });
    expect(bookmarkButton).toBeInTheDocument();

    const shortFacts = screen.getByRole('list');
    expect(shortFacts).toBeInTheDocument();
  });
});
