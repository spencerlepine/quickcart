import React from 'react';
import { screen, render } from 'test-utils';
import CartViewer from './CartViewer';
import { CartContext } from 'context/CartContext/CartContext';
import categorizedProductList from 'categorizedProductList';

describe('CartViewer', () => {
  const mockContext = {
    cartProducts: categorizedProductList,
    itemCount: Object.values(categorizedProductList).reduce((arr, categoryObj) => arr.concat(Object.values(categoryObj)), []).reduce((sum, obj) => sum += 1, 0),
    cartToLogs: () => { },
    fetchCategoryDocs: () => { },
  };

  const renderWithProps = newProps => (
    render((
      <CartContext.Provider value={{ ...mockContext, ...newProps }}>
        <CartViewer />
      </CartContext.Provider >
    ))
  );

  test('renders itemCount (from CartContext) in checkout button', () => {
    renderWithProps();

    const checkoutText = `Checkout ${mockContext['itemCount']} Items`;
    expect(screen.getByText(checkoutText)).toBeInTheDocument();
  });

  test('renders "Analyze Cart" button', () => {
    // look for text "Analyze Cart"
    // check role of element is button (from container?)
    expect(false).toBe(true);
  });

  // div.category-analyzer
  test('"Analyze Cart" click switches from "Cart List" to "Category Analyzer"', () => {
    expect(false).toBe(true);
  });
});
