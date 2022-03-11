import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Searchbar from './Searchbar';

describe('Searchbar', () => {
  it('render a label and a input element', () => {
    render(<Searchbar />);

    const inputElement = screen.getByLabelText(/Search/i);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('placeholder', 'e.g. Caipirinha...');
  });

  it('calls onCange function when change input value', () => {
    const changeValue = jest.fn();
    render(<Searchbar handleChange={changeValue} />);

    const inputElement = screen.getByLabelText(/Search/i);

    userEvent.type(inputElement, 'A');

    expect(changeValue).toHaveBeenCalled();
  });
});
