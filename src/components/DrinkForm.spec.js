import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import DrinkForm from './DrinkForm';

describe('CreateDrinkForm', () => {
  it('renders name input, 5 inputs for ingredients and 5 for measures', () => {
    render(
      <MemoryRouter>
        <DrinkForm />
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText(/what is the name/i);
    expect(nameInput).toBeInTheDocument();

    const ingredientInputs = screen.getAllByLabelText(/ingredient/i);
    expect(ingredientInputs).toHaveLength(5);

    const measureInputs = screen.getAllByLabelText(/measure/i);
    expect(measureInputs).toHaveLength(5);
  });

  it('renders 3 select inputs', () => {
    render(
      <MemoryRouter>
        <DrinkForm />
      </MemoryRouter>
    );

    const selectAlcoholic = screen.getByLabelText(/alcoholic/i);
    expect(selectAlcoholic).toBeInTheDocument();

    const selectCategory = screen.getByLabelText(/category/i);
    expect(selectCategory).toBeInTheDocument();

    const selectGlass = screen.getByLabelText(/glass/i);
    expect(selectGlass).toBeInTheDocument();
  });

  it('renders a textarea for instructions', () => {
    render(
      <MemoryRouter>
        <DrinkForm />
      </MemoryRouter>
    );

    const textareaInstructions = screen.getByLabelText(/instructions/i);
    expect(textareaInstructions).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    render(
      <MemoryRouter>
        <DrinkForm />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button', { name: /create/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('not calls the submit function when clicking the button without filling the form', () => {
    const handleSubmit = jest.fn();
    const onSubmit = jest.fn();
    render(
      <MemoryRouter>
        <DrinkForm onSubmit={handleSubmit(onSubmit)} />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button', { name: /create/i });
    userEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('calls the submit function when clicking the button when filling required inputs', () => {
    const handleSubmit = jest.fn();
    const onSubmit = jest.fn();
    render(
      <MemoryRouter>
        <DrinkForm onSubmit={handleSubmit(onSubmit)} />
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText(/what is the name/i);
    userEvent.type(nameInput, 'Testname');

    const ingredientInput = screen.getByLabelText(/ingredient 1/i);
    userEvent.type(ingredientInput, 'Testingredient');

    const measureInput = screen.getByLabelText(/measure 1/i);
    userEvent.type(measureInput, '10ml');

    const textareaInstructions = screen.getByLabelText(/instructions/i);
    userEvent.type(textareaInstructions, 'Testinstruction to test');

    const submitButton = screen.getByRole('button', { name: /create/i });
    userEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
