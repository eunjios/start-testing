import { logRoles } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('button starts with correct color', () => {
  const { container } = render(<Button />);
  logRoles(container); // <button class="_button_29f8d0 _white_29f8d0" />

  const buttonElement = screen.getByRole('button');
  expect(buttonElement.className.includes('white')).toBeTruthy();
});

test('button has correct color after click', () => {});

test('button has correct text after click', () => {});
