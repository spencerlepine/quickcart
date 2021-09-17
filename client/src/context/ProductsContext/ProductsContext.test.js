// import React from 'react';
// import { screen, render } from 'test-utils';
// import * as authUser from 'api/firebase/account';
import useProducts, { ProductsProvider } from './ProductsContext';
import testContextExports from 'test-utils/testContextExports';

describe('ProductsContext', () => {
  const expectedExports = [
    {
      key: 'loading',
      targetInstance: Boolean,
    },
    {
      key: 'fetchCategoryDocs',
      targetInstance: Function,
    },
    {
      key: 'fetchDocByID',
      targetInstance: Function,
    },
    {
      key: 'savedProducts',
      targetInstance: Object,
    },
    {
      key: 'addSavedProduct',
      targetInstance: Function,
    },
    {
      key: 'externalProducts',
      targetInstance: Object,
    },
    {
      key: 'deleteSavedProduct',
      targetInstance: Function,
    },
  ];

  testContextExports(ProductsProvider, useProducts, expectedExports);
});
