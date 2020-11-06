import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to GollemTimes page/i);
  expect(linkElement).toBeInTheDocument();
});
