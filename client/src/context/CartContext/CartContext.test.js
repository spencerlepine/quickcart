import React from 'react';
import { screen, render } from 'test-utils';
import { CartProvider } from './CartContext';

describe('CartContext', () => {
  it('should render', () => {
    expect(() => render(<CartProvider><p>MOCK CHILD</p></CartProvider>)).not.toThrow(new Error);
  });

  it('should render the children', () => {
    render(<CartProvider><p>MOCK CHILD</p></CartProvider>);

    expect(screen.getByText('MOCK CHILD')).toBeInTheDocument();
  });
});
