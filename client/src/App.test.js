import React from 'react';
import { render, cleanup } from 'test-utils';
import App from './App';

describe('App', () => {
  afterEach(cleanup);

  it('should render', () => {
    expect(() => render(<App />)).not.toThrow(new Error);
  });
});
