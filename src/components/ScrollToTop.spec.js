import { render, screen } from '@testing-library/react';
import ScrollToTop from './ScrollToTop';

describe('ScrollToTop', () => {
  it('renders a button with an image of an arrow up icon', () => {
    render(<ScrollToTop />);

    const toTopButton = screen.getByRole('button');
    expect(toTopButton).toBeInTheDocument();
  });
});
