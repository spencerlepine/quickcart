import React from 'react';
import { screen, render, fireEvent } from 'test-utils';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const defaultProps = {
    searchMode: true,
    setSearchMode: () => { },
    searchFilter: '',
    setSearchFilter: () => { },
  };

  test('renders an input element', () => {
    render(<SearchBar {...defaultProps} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('typing will trigger the setSearchFilter prop function', () => {
    const setSearchFilter = jest.fn();
    render(<SearchBar {...defaultProps} setSearchFilter={setSearchFilter} />);
    const searchBar = screen.getByRole('textbox');

    fireEvent.change(searchBar, { target: { value: 'donuts' } });

    expect(setSearchFilter).toHaveBeenCalledTimes(1);
  });

  test('hitting enter triggers the searchMode prop function', () => {
    const setSearchMode = jest.fn();
    render(<SearchBar {...defaultProps} setSearchMode={setSearchMode} />);
    const searchBar = screen.getByRole('textbox');

    fireEvent.change(searchBar, { target: { value: 'donuts' } });
    fireEvent.keyDown(searchBar, { key: 'Enter', code: 'Enter' });

    setTimeout(() => {
      expect(setSearchMode).toHaveBeenCalledTimes(1);
    }, 0);
  });

  // test('clicking the search button triggers the setSearchMode prop function', () => {

  // });

  // test('hitting the clear button empties the query input', async () => {
  //   was not able to test
  //   use: import SearchBarComponent from 'material-ui-search-bar';
  // });

  // test('hitting the search triggers the ProductsContext', () => {
  //
  // });
});
