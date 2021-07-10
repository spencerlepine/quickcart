import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MultiContextProvider from './components/MultiContext/MultiContext';
import './index.css';
import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <MultiContextProvider>
      <App />
    </MultiContextProvider>
  </Router >,
  document.getElementById('root')
);
