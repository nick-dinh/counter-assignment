// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';

// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // check if message 'Counter' is in the document
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // grab text content from html element with testid 'count'
  const count = screen.getAllByTestId('count')[0].textContent;

  // check if 0
  expect(count).toBe('0');
});

test('clicking + increments the count', () => {
  // click
  fireEvent.click(screen.getByText('+'))

  // check if 1 meaning it incremented from 0
  const count = screen.getAllByTestId('count')[0].textContent;
  expect(count).toBe('1');
});

test('clicking - decrements the count', () => {
  // click
  fireEvent.click(screen.getByText('-'))

  // check if -1 meaning it decremented from 0
  const count = screen.getAllByTestId('count')[0].textContent;
  expect(count).toBe('-1');
});
