import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteModal from './DeleteModal';

describe('DeleteModal', () => {
  it('renders a div with a message and two buttons', () => {
    render(<DeleteModal />);

    const message = screen.getByText(/Do you really/i);
    expect(message).toBeInTheDocument();

    const confirmButton = screen.getByRole('button', { name: /yes/i });
    expect(confirmButton).toBeInTheDocument();

    const cancelButton = screen.getByRole('button', { name: /no/i });
    expect(cancelButton).toBeInTheDocument();
  });

  it('when clicking the confirm button the function to delete is called', () => {
    const confirmFunction = jest.fn();
    render(<DeleteModal confirmDeleteDrink={confirmFunction} />);

    const confirmButton = screen.getByRole('button', { name: /yes/i });
    userEvent.click(confirmButton);
    expect(confirmFunction).toHaveBeenCalled();
  });

  it('when clicking the cancel button the function to cancel is called', () => {
    const cancelFunction = jest.fn();
    render(<DeleteModal cancelDeleteDrink={cancelFunction} />);

    const cancelButton = screen.getByRole('button', { name: /no/i });
    userEvent.click(cancelButton);
    expect(cancelFunction).toHaveBeenCalled();
  });
});
