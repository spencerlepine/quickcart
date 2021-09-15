import React from 'react';
import { screen, render } from 'test-utils';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('renders an input element', async () => {
    render(<SearchBar />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('typing will trigger the setSearchFilter prop function', async () => {
    expect(false).toBe(true);
  });

  test('__ triggers the searchMode prop functoin', async () => {
    expect(false).toBe(true);
  });

  test('hitting the clear button empties the query input', async () => {
    expect(false).toBe(true);
  });

  test('hitting the search triggers the ProductsContext', async () => {
    expect(false).toBe(true);
  });
});
