import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App test', () => {
  it('should have level 1 heading with correct text', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/welcome/i);
  });
});
