import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react 202404 link', () => {
  render(<App />);
  debugger;
  const linkElement = screen.getByText(/React 202404/i);
  debugger;
  expect(linkElement).toBeInTheDocument();
});
