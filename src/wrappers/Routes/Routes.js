import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from 'config/constants/routeConstants';
import * as PAGES from 'pages';

const Routes = () => (
  <Switch>
    <Route path={ROUTES.HOME} exact component={PAGES.BrowsePage} />
    <Route path={ROUTES.LOGIN} component={PAGES.LoginPage} />
    <Route path={ROUTES.SIGNUP} component={PAGES.SignupPage} />
    <Route path={ROUTES.WELCOME} component={PAGES.WelcomePage} />
    <Route path={ROUTES.SETTINGS} component={PAGES.SettingsPage} />
    <Route path={ROUTES.CREATE} component={PAGES.CreatePage} />
    <Route path={ROUTES.CART} component={PAGES.CartPage} />
    <Route path={ROUTES.SAVED} component={PAGES.SavedPage} />
    <Route path={ROUTES.CART_LOGS} component={PAGES.CartLogsPage} />
    <Route path="/empty" component={PAGES.MissingPage} />
    <Route path="/" component={PAGES.MissingPage} />
  </Switch>
);

export default Routes;
