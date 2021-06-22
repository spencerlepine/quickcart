import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import MultiContextProvider from "./components/MultiContext/MultiContext";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <MultiContextProvider>
      <App />
    </MultiContextProvider>
  </Router >,
  document.getElementById('root')
);
