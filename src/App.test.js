import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  expect(screen.getByText(/Lokesh Manikanth Reddy/i)).toBeInTheDocument();
});
