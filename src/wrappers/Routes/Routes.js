import React from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constants/routeConstants";

const Routes = () => (
  <Switch>
    <Route path={ROUTES.HOME} exact component={BrowsePage} />
    <Route path={ROUTES.LOGIN} component={LoginPage} />
    <Route path={ROUTES.SIGNUP} component={SignupPage} />
    <Route path={ROUTES.WELCOME} component={WelcomePage} />
    <Route path={ROUTES.SETTINGS} component={SettingsPage} />
    <Route path={ROUTES.CREATE} component={CreatePage} />
    <Route path={ROUTES.CART} component={CartPage} />
    <Route path={ROUTES.SEARCH} component={SearchPage} />
    <Route path={ROUTES.CART_LOGS} component={CartLogsPage} />
    <Route path="/empty" component={MissingPage} />
    <Route path="/" component={MissingPage} />
  </Switch>
);

export default Routes;
