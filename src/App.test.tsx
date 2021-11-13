import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('tests successful home render by finding title ', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather Forecast/i);
  expect(linkElement).toBeInTheDocument();
});
