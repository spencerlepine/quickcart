import React from "react"
import { Provider } from "react-redux";
import reducers from "../../reducers"
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const MockWrapper = ({ children }) => {
  const history = createBrowserHistory();
  
  return ( 
    <Provider store={store}>
      <Router history={history}>
        {children}
      </Router>
    </Provider>
  )
}

export default MockWrapper