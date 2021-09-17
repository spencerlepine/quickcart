import React from 'react';
import { screen, render } from 'test-utils';
import CartCard from './CartCard';
import sampleProduct from 'sampleProduct';

describe('CartCard', () => {
  beforeEach(() => {
    render(<CartCard {...sampleProduct} quantity={1} />);
  });

  test('renders the product image', () => {
    expect(screen.findByRole('img')).toBeInTheDocument();
  });

  test('renders the product price formatted $1.99', () => {
    expect(false).toBe(true);
  });

  test('renders the product name', () => {
    expect(false).toBe(true);
  });

  test('renders the product unit formatted (1 unit)', () => {
    expect(false).toBe(true);
  });

  test('renders minus (-) and add (+) button', () => {
    expect(false).toBe(true);
  });

  test('renders product quantity count', () => {
    expect(false).toBe(true);
  });

  test('minus button click decrements the quantity', () => {
    expect(false).toBe(true);
  });

  test('minus button triggers removeToCart in Cart Context', () => {
    expect(false).toBe(true);
  });

  test('add button incremets the quantity', () => {
    expect(false).toBe(true);
  });

  test('add button triggers addToCart in Cart Context', () => {
    expect(false).toBe(true);
  });
});
