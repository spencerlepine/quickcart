// import React from 'react';
// import { screen, render } from 'test-utils';
// import * as authUser from 'api/firebase/account';
import useForm, { FormProvider } from './FormContext';
import testContextExports from 'test-utils/testContextExports';

describe('FormContext', () => {
  const expectedExports = [
    {
      key: 'formEntries',
      targetInstance: Object,
    },
    {
      key: 'setFormEntries',
      targetInstance: Function,
    },
    {
      key: 'handleImageChange',
      targetInstance: Function,
    },
    {
      key: 'handleSubmit',
      targetInstance: Function,
    },
    {
      key: 'handleDelete',
      targetInstance: Function,
    },
    {
      key: 'setEditingMode',
      targetInstance: Function,
    },
    {
      key: 'setIsExternal',
      targetInstance: Function,
    },
    {
      key: 'isExternal',
      targetInstance: Boolean,
    },
    {
      key: 'editingMode',
      targetInstance: Boolean,
    },
  ];

  testContextExports(FormProvider, useForm, expectedExports);
});
