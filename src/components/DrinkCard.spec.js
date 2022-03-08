import { render, screen } from '@testing-library/react';
import DrinkCard from './DrinkCard';

describe('DrinkCard', () => {
  it('render div with name, picture, ingredients and instructions for a drink', () => {
    render(
      <DrinkCard
        drink={{
          strDrink: 'Mojito',
          strDrinkThumb:
            'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
          strIngredient1: 'lime',
          strMeasure1: 'juice of 1',
          strInstructions: `Muddle mint leaves with sugar 
        and lime juice. Add a splash 
        of soda water and fill the 
        glass with cracked ice. Pour 
        the rum and top with soda 
        water. Garnish and serve with 
        straw`,
        }}
      />
    );

    const drinkName = screen.getByRole('heading', { level: 2 });
    expect(drinkName).toHaveTextContent('Mojito');

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();

    const ingredients = screen.getByRole('list');
    expect(ingredients).toBeInTheDocument();

    const instructions = screen.getByText(/Muddle mint/i);
    expect(instructions).toBeInTheDocument();
  });
});
