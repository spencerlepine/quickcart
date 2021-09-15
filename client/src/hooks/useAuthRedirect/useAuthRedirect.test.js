import React from 'react';
import { screen, render } from 'test-utils';
import useAuthRedirect from './useAuthRedirect';
// import { AuthContext } from 'context/AuthContext';
// render(<useAuthRedirect {...sampleProduct} searchFilter={''} minimalFormat={false} />);

describe('useAuthRedirect', () => {
  const WrappedComponent = useAuthRedirect(<p>CHILD</p>);

  test('returns a function when invoked', () => {
    expect(typeof WrappedComponent).toBe('function');
  });

  test('renders a (wrapped) child component from first argument', async () => {
    render(<WrappedComponent />);

    const childComponent = await screen.findAllByText(/CHILD/);
    expect(childComponent).toHaveLength(1);
  });

  test('renders HOME redirect with Valid CurrentUser and true isAuthPage arguments', async () => {
    expect(false).toBe(true);
  });

  test('renders child with Valid CurrentUser and false isAuthPage arguments', async () => {
    expect(false).toBe(true);
  });

  test('renders child with Invalid CurrentUser and true isAuthPage arguments', async () => {
    expect(false).toBe(true);
  });

  test('renders WELCOME redirect with Invalid CurrentUser and false isAuthPage arguments', async () => {
    expect(false).toBe(true);
  });
});
