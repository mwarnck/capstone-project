import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RandomDrinkPage from './RandomDrinkPage';

describe('RandomDrinkPage', () => {
  it('renders heading, ul, image, dl and p element', () => {
    render(<RandomDrinkPage />);

    const drinkName = screen.getByRole('heading', { level: 2 });
    expect(drinkName).toBeInTheDocument();

    const shortFactsIngredients = screen.getAllByRole('list');
    expect(shortFactsIngredients).toHaveLength(2);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();

    const RandomButton = screen.getByRole('button', { name: /mix/i });
    expect(RandomButton).toBeInTheDocument();

    const instructions = screen.getByTestId('instructions');
    expect(instructions).toBeInTheDocument();
  });
});
