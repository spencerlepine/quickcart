import { Route, Switch } from 'react-router-dom'
import * as ROUTES from '../../../constants/routeConstants';
import UserWelcomePage from '../../pages/UserWelcomePage/UserWelcomePage';
import MissingPage from '../../pages/MissingPage/MissingPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import LogInPage from '../../pages/LogInPage/LogInPage';
import CartPage from '../../pages/CartPage/CartPage';
import FormPage from '../../pages/FormPage/FormPage';
import PantryPage from '../../pages/PantryPage/PantryPage';
import RecommendedPage from '../../pages/RecommendedPage/RecommendedPage';
import SettingsPage from '../../pages/SettingsPage/SettingsPage';
import BrowseGroceries from '../../pages/BrowseGroceriesPage/BrowseGroceriesPage';
import SpoonUPCSearchPage from '../../pages/SpoonUPCSearchPage/SpoonUPCSearchPage';
import SpoonacularSearchPage from '../../pages/SpoonacularSearchPage/SpoonacularSearchPage';
import CartLogPage from '../../pages/CartLogPage/CartLogPage';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={BrowseGroceries} />
    <Route exact path={ROUTES.WELCOME} component={UserWelcomePage} />
    <Route path={ROUTES.CART_LOGS} component={CartLogPage} />
    <Route path={ROUTES.LOGIN} component={LogInPage} />
    <Route path={ROUTES.SIGNUP} component={SignUpPage} />
    <Route path={ROUTES.FORM} component={FormPage} />
    <Route path={ROUTES.CART} component={CartPage} />
    <Route path={ROUTES.PANTRY} component={PantryPage} />
    <Route path={ROUTES.RECOMMENDED} component={RecommendedPage} />
    <Route path={ROUTES.SETTINGS} component={SettingsPage} />
    <Route path={ROUTES.SEARCH} component={SpoonacularSearchPage} />
    <Route path={ROUTES.UPC_SEARCH} component={SpoonUPCSearchPage} />
    <Route path='/empty' component={MissingPage} />
    <Route path='/' component={MissingPage} />
  </Switch>
)
export default Routes;