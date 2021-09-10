import React from 'react';
import { render, cleanup } from './test-utils';
import App from './App';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});
