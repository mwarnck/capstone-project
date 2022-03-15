import { render, screen } from '@testing-library/react';
import LoadingScreen from './LoadingScreen';

describe('LoadingScreen', () => {
  it('renders an image and p element', () => {
    render(<LoadingScreen />);

    const loadingImage = screen.getByRole('img');
    expect(loadingImage).toBeInTheDocument();

    const loadingTitle = screen.getByText('Cocktail Night');
    expect(loadingTitle).toBeInTheDocument();
  });
});
