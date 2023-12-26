import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('button starts with correct label and color', () => {
  // render Button
  render(<Button />);

  // find the button
  const buttonElement = screen.getByRole('button', { name: /black/i });

  // check initial color
  expect(buttonElement.className.includes('white')).toBeTruthy();
});

test('button has correct label and color after click', () => {
  // render App
  render(<Button />);

  // find the button
  const buttonElement = screen.getByRole('button', { name: /black/i });

  // click the button
  fireEvent.click(buttonElement);

  // check button text
  expect(buttonElement).toHaveTextContent(/white/i);

  // check button color
  expect(buttonElement.className.includes('black')).toBeTruthy();
});
