import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterDrinks from './FilterDrinks';

describe('FilterDrinks', () => {
  it('renders three radio buttons with three labels', () => {
    render(<FilterDrinks currentFilter={'all'} />);

    const radioButtonAll = screen.getByLabelText('All');
    const radioButtonAlcoholic = screen.getByLabelText('Alcoholic');
    const radioButtonNonAlcoholic = screen.getByLabelText('Non-Alcoholic');

    expect(radioButtonAll).toBeInTheDocument();
    expect(radioButtonAlcoholic).toBeInTheDocument();
    expect(radioButtonNonAlcoholic).toBeInTheDocument();
  });

  it('when clicking on a radio button the onChange function is called with the value', () => {
    const radioCallback = jest.fn();
    render(
      <FilterDrinks handleChangeFilter={radioCallback} currentFilter={'all'} />
    );

    const radioButtonAll = screen.getByLabelText('All');
    const radioButtonAlcoholic = screen.getByLabelText('Alcoholic');
    const radioButtonNonAlcoholic = screen.getByLabelText('Non-Alcoholic');

    userEvent.click(radioButtonAll);
    expect(radioCallback).toBeCalledWith('all');
    userEvent.click(radioButtonAlcoholic);
    expect(radioCallback).toBeCalledWith('alcoholic');
    userEvent.click(radioButtonNonAlcoholic);
    expect(radioCallback).toBeCalledWith('non alcoholic');
  });
});
