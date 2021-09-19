// import React from 'react';
// import { screen, render } from 'test-utils';
// import * as authUser from 'api/firebase/account';
import useCart, { CartProvider } from './CartContext';
import testContextExports from 'test-utils/testContextExports';

describe('CartContext', () => {
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
      key: 'addToCart',
      targetInstance: Function,
    },
    {
      key: 'itemCount',
      targetInstance: Number,
    },
    {
      key: 'removeFromCart',
      targetInstance: Function,
    },
    {
      key: 'cartToLogs',
      targetInstance: Function,
    },
    {
      key: 'cartProducts',
      targetInstance: Object,
    },
    {
      key: 'hiddenProductIds',
      targetInstance: Array,
    },
    {
      key: 'hideProductsById',
      targetInstance: Function,
    },
  ];

  testContextExports(CartProvider, useCart, expectedExports);
});
