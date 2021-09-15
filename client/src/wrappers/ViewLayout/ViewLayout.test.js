import React from 'react';
import { render, cleanup } from 'test-utils';
import ViewLayout from './ViewLayout';

describe('Card', () => {
  afterEach(cleanup);

  it('should render', () => {
    expect(() => render(<ViewLayout><p>MOCK CHILD</p></ViewLayout>)).not.toThrow(new Error);
  });
});
