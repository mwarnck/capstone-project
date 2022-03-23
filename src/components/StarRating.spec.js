import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StarRating from './StarRating';

describe('StarRating', () => {
  it('renders a heading and 5 buttons for rating', () => {
    render(<StarRating />);

    const heading = screen.getByText(/rate/i);
    expect(heading).toBeInTheDocument();

    const ratingButtons = screen.getAllByRole('button');
    expect(ratingButtons).toHaveLength(5);
  });

  it('calls a function to set rating when clicking a button', () => {
    const ratingCallback = jest.fn();
    render(<StarRating saveRatingToDrink={ratingCallback} />);

    const ratingButtons = screen.getAllByRole('button');
    userEvent.click(ratingButtons[0]);
    expect(ratingCallback).toHaveBeenCalled();
  });
});
