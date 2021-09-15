import React from 'react';
import { screen, render } from 'test-utils';
import { FormProvider } from './FormContext';

describe('FormContext', () => {
  it('should render', () => {
    expect(() => render(<FormProvider><p>MOCK CHILD</p></FormProvider>)).not.toThrow(new Error);
  });

  it('should render the children', () => {
    render(<FormProvider><p>MOCK CHILD</p></FormProvider>);

    expect(screen.getByText('MOCK CHILD')).toBeInTheDocument();
  });
});
