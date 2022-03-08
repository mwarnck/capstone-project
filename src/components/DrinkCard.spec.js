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

    const button = screen.getByRole('button', { name: /Show/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const ingredients = screen.getByRole('list');
    expect(ingredients).toBeInTheDocument();

    const instructions = screen.getByText(/Muddle mint/i);
    expect(instructions).toBeInTheDocument();

    userEvent.click(button);

    expect(ingredients).not.toBeInTheDocument();
    expect(instructions).not.toBeInTheDocument();
  });

  it('clicking on the button calls the function toggleDetails', () => {
    const handleClick = jest.fn();
    render(
      <DrinkCard
        toggleDetails={handleClick}
        detailsVisable={false}
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

    const button = screen.getByRole('button', { name: /show/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
