// Component example

// ContentWrapper.jsx
import React from "react";
import Navbar from "./Navbar";
import { withRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import { render } from '@testing-library/react';
import { Router, Route } from "react-router-dom";

const ContentWrapper = ({ children, match }) => (
  <Navbar>
    <p>Match id: {match.params.id}</p>
    {children}
  </Navbar>
);
export default withRouter(ContentWrapper);


//Test file

// Helper function
export function renderWithRouterMatch(
  ui,
  {
    path = "/",
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={ui} />
      </Router>
    )
  };
}

// ContentWrapper.test.js
// import ContentWrapper from "./ContentWrapper";

it("mocks match.params in the test in case your component references match.params.someValueHere", () => {
  const { getByText } = renderWithRouterMatch(ContentWrapper, {
    route: "/ABC123",
    path: "/:id"
  });
  getByText.debug();
  expect(getByText("Match id: ABC123")).toBeInTheDocument();
});
