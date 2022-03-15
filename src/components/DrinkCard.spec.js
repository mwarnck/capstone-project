import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DrinkCard from './DrinkCard';

describe('DrinkCard', () => {
  it('render div with name, picture, button, ingredients and instructions for a drink', () => {
    render(
      <DrinkCard
        drink={{
          strDrink: 'Mojito',
          strDrinkThumb:
            'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
        }}
      />
    );

    const drinkName = screen.getByRole('heading', { level: 2 });
    expect(drinkName).toHaveTextContent('Mojito');

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();

    const bookmarkButton = screen.getByRole('button', { name: /bookmark/i });
    expect(bookmarkButton).toBeInTheDocument();

    const shortFacts = screen.getByRole('list');
    expect(shortFacts).toBeInTheDocument();
  });
});
