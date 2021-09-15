import React from 'react';
import { screen, render, fireEvent } from 'test-utils';
import AddToCartButton from './AddToCartButton';
import { CartContext } from 'context/CartContext/CartContext';
import sampleProduct from 'sampleProduct';

describe('ProductCard', () => {
  test('renders a clickable element', () => {
    render(<AddToCartButton isBubbleBtn={false} item={sampleProduct} categoryID={sampleProduct['_id']} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('clicking should trigger addToCart function in CartContext', () => {
    // Mock the Context function that should be triggered
    const addToCart = jest.fn();
    render(
      <CartContext.Provider value={{ addToCart }}>
        <AddToCartButton isBubbleBtn={false} item={sampleProduct} categoryID={sampleProduct['_id']} />
      </CartContext.Provider>,
    );

    const clickableElem = screen.getByRole('button');
    fireEvent.click(clickableElem);

    expect(addToCart).toHaveBeenCalledTimes(1);
  });

  test('renders with "+" text when isBubbleBtn prop is true', () => {
    render(<AddToCartButton isBubbleBtn={true} item={sampleProduct} categoryID={sampleProduct['_id']} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  test('renders with "ADD TO CART" text when isBubbleBtn prop is false', () => {
    render(<AddToCartButton isBubbleBtn={false} item={sampleProduct} categoryID={sampleProduct['_id']} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('ADD TO CART')).toBeInTheDocument();
  });
});
