import React from 'react';
import { screen, render as rtlRender, fireEvent } from 'test-utils';
import CartViewer from './CartViewer';
import { CartContext } from 'context/CartContext/CartContext';
import categorizedProductList from 'categorizedProductList';

const render = (ui, contextValues) => rtlRender((
  <CartContext.Provider value={{ ...contextValues }}>
    {ui}
  </CartContext.Provider >
));

describe('CartViewer', () => {
  const mockContext = {
    cartProducts: categorizedProductList,
    itemCount: Object.values(categorizedProductList).reduce((arr, categoryObj) => arr.concat(Object.values(categoryObj)), []).reduce((sum, obj) => sum += 1, 0),
    cartToLogs: () => { },
    fetchCategoryDocs: () => { },
  };

  test('renders itemCount (from CartContext) in checkout button', () => {
    render(<CartViewer />, mockContext);

    const checkoutText = `Checkout ${mockContext['itemCount']} Items`;
    expect(screen.getByText(checkoutText)).toBeInTheDocument();
  });

  test('renders two buttons', () => {
    render(<CartViewer />, mockContext);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });


  test('renders the "Checkout n Items" button first', () => {
    render(<CartViewer />, mockContext);
    const checkoutBtn = screen.getAllByRole('button')[0];
    expect(checkoutBtn).toBeInTheDocument();
    expect(checkoutBtn).toHaveTextContent(/Checkout \d+ Item['s|s]/);
  });

  test('renders the "Analyze Cart" button second', () => {
    render(<CartViewer />, mockContext);

    const modeBtn = screen.getAllByRole('button')[1];
    expect(modeBtn).toBeInTheDocument();
    expect(modeBtn).toHaveTextContent('Analyze Cart');
  });

  test('clicking the "Analyze Cart" button changes text to "Veiw List"', () => {
    render(<CartViewer />, mockContext);
    const modeBtn = screen.getAllByRole('button')[1];

    fireEvent.click(modeBtn);

    setTimeout(() => {
      expect(modeBtn).toHaveTextContent(/Checkout \d+ Item['s|s]/);
    }, 0);
  });
  /*
test('clicking the "Analyze Cart" button the div to "Cart List" to "Category Analyzer"', () => {
  const { container } = render(<CartViewer />, mockContext);
  expect(container.querySelector('div.category-analyzer')).not.toBeInTheDocument();

  const modeBtn = screen.getAllByRole('button')[1];
  fireEvent.click(modeBtn);

  setTimeout(() => {
    expect(container.querySelector('div.category-analyzer')).toBeInTheDocument();
  }, 0);
});
*/
});
