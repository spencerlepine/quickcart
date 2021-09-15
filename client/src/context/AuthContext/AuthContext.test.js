import React from 'react';
import { screen, render } from 'test-utils';
import { AuthProvider } from './AuthContext';

describe('AuthContext', () => {
  it('should render', () => {
    expect(() => render(<AuthProvider><p>MOCK CHILD</p></AuthProvider>)).not.toThrow(new Error);
  });

  it('should render the children', () => {
    render(<AuthProvider><p>MOCK CHILD</p></AuthProvider>);

    expect(screen.getByText('MOCK CHILD')).toBeInTheDocument();
  });
});
