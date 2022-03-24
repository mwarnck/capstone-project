import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DrinkPage from './DrinkPage';

describe('DrinkPage', () => {
  render(
    <MemoryRouter>
      <DrinkPage
        drink={{
          strDrink: 'Mojito',
          strDrinkThumb:
            'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
          strIngredient1: 'Gin',
          strMeasure1: '2 oz',
          strCategory: 'Cocktail',
          strAlcoholic: 'Alcoholic',
          strGlass: 'Cocktail glass',
          strInstructions:
            'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.',
        }}
      />
    </MemoryRouter>
  );

  it('renders heading, ul, image, dl and p element', () => {
    const drinkName = screen.getByRole('heading', { level: 2 });
    expect(drinkName).toHaveTextContent('Mojito');

    const shortFactsIngredients = screen.getAllByRole('list');
    expect(shortFactsIngredients).toHaveLength(3);

    const image = screen.getByRole('img', { name: /Mojito/i });
    expect(image).toBeInTheDocument();

    const backButton = screen.getByRole('button', { name: /back/i });
    expect(backButton).toBeInTheDocument();

    const bookmarkButton = screen.getByRole('button', { name: /bookmark/i });
    expect(bookmarkButton).toBeInTheDocument();

    const instructions = screen.getByText(/Pour/i);
    expect(instructions).toBeInTheDocument();
  });
});
