import React from 'react';
import { screen, render } from 'test-utils';
import { ProductsProvider } from './ProductsContext';

describe('ProductsContextContext', () => {
  it('should render', () => {
    expect(() => render(<ProductsProvider><p>MOCK CHILD</p></ProductsProvider>)).not.toThrow(new Error);
  });

  it('should render the children', () => {
    render(<ProductsProvider><p>MOCK CHILD</p></ProductsProvider>);

    expect(screen.getByText('MOCK CHILD')).toBeInTheDocument();
  });
});
