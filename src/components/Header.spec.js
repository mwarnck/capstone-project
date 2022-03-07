import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders one h1 element', () => {
    render(<Header />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Cocktail Night');
  });
});
