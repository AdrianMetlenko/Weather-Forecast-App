import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

//Smoke test -> compiles successfully
test('tests successful home render and find title ', () => {
  render(<App />);
  const title = screen.getByText(/Weather Forecast/i);
  expect(title).toBeInTheDocument();
});

//Most components show loading components while waiting for API response
test('tests loading message ', () => {
  render(<App />);
  const loading = screen.getAllByText(/Loading.../i)[0]
  expect(loading).toBeInTheDocument();
});

//Test components which are shown on initial render independent of API response
test('tests initial component', () => {
  render(<App />);
  const citySearch = screen.getAllByText(/Select a new city.../i)[0]
  expect(citySearch).toBeInTheDocument();
});