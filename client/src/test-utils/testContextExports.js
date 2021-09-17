import React from 'react';
import { screen, render } from 'test-utils';

const testContextExports = (ContextProdiver, useContext, expectedExports) => {
  it('expectedExports not be an empty array', () => {
    expect(expectedExports instanceof Array).toBeTruthy();
    expect(expectedExports.length).toBeGreaterThan(0);
  });

  it('expectedExports should contain objects', () => {
    const validElements = expectedExports.map(elem => elem instanceof Object);
    expect(validElements.every(e => e === true)).toBeTruthy();
  });

  it('expectedExports should contain "key" key with string value', () => {
    const firstElem = expectedExports[0];

    expect(firstElem['key']).not.toBe(undefined);
    expect(firstElem['key'].constructor === String).toBeTruthy();
  });

  it('expectedExports should contain "targetInstance" key with contructor value', () => {
    const firstElem = expectedExports[0];

    expect(firstElem['targetInstance']).not.toBe(undefined);
    expect(firstElem['targetInstance'] instanceof Object).toBeTruthy();
  });

  it('useContext should be a function', () => {
    expect(useContext instanceof Function).toBeTruthy();
  });

  it('should render ContextProdiver with no errors', () => {
    expect(() => render(<ContextProdiver><p>MOCK CHILD</p></ContextProdiver>)).not.toThrow(new Error);
  });

  it('should render the children', () => {
    render(<ContextProdiver><p data-testid="mockChild">MOCK CHILD</p></ContextProdiver>);

    expect(screen.getByTestId('mockChild')).toBeInTheDocument();
    expect(screen.getByText('MOCK CHILD')).toBeInTheDocument();
  });

  test('passes correct values to children', () => {
    const MockChild = () => {
      const productExports = useContext();

      expectedExports.forEach(({ key, targetInstance }) => {
        try {
          expect(productExports[key]).not.toBe(undefined);
        } catch {
          throw new Error(`expected value ${productExports[key]} (at key: ${key}) NOT to be undefined`);
        }

        try {
          expect(productExports[key].constructor === targetInstance).toBeTruthy();
        } catch {
          throw new Error(`expected ${productExports[key]} (at key: ${key}) to be instance of ${targetInstance.toString()}`);
        }
      });

      return <p>test</p>;
    };

    render(<ContextProdiver><MockChild /></ContextProdiver>);
  });
};

/* eslint-disable */
export default testContextExports;
