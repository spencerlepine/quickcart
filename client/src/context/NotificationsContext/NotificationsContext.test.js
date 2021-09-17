// import React from 'react';
// import { screen, render } from 'test-utils';
// import * as authUser from 'api/firebase/account';
import useNotifications, { NotificationsProvider } from './NotificationsContext';
import testContextExports from 'test-utils/testContextExports';

describe('NotificationsContext', () => {
  const expectedExports = [
    {
      key: 'currentNotification',
      targetInstance: String,
    },
    {
      key: 'setCurrentNotification',
      targetInstance: Function,
    },
  ];

  testContextExports(NotificationsProvider, useNotifications, expectedExports);
});
