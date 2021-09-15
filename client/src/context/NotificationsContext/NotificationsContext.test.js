import React from 'react';
import { screen, render } from 'test-utils';
import { NotificationsProvider } from './NotificationsContext';

describe('NotificationsContextContext', () => {
  it('should render', () => {
    expect(() => render(<NotificationsProvider><p>MOCK CHILD</p></NotificationsProvider>)).not.toThrow(new Error);
  });

  it('should render the children', () => {
    render(<NotificationsProvider><p>MOCK CHILD</p></NotificationsProvider>);

    expect(screen.getByText('MOCK CHILD')).toBeInTheDocument();
  });
});
