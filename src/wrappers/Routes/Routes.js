import { Route, Switch } from "react-router-dom"
import * as ROUTES from "../../../constants/routeConstants";
import UserWelcomePage from "../UserWelcomePage/UserWelcomePage";
import MissingPage from "../MissingPage/MissingPage";
import SignUpPage from "../SignUpPage/SignUpPage";
import LogInPage from "../LogInPage/LogInPage";
import CartPage from "../CartPage/CartPage";
import FormPage from "../FormPage/FormPage";
import PantryPage from "../PantryPage/PantryPage";
import RecommendedPage from "../RecommendedPage/RecommendedPage";
import SettingsPage from "../SettingsPage/SettingsPage";
import BrowseGroceries from "../BrowseGroceriesPage/BrowseGroceriesPage";
import SpoonUPCSearchPage from "../SpoonUPCSearchPage/SpoonUPCSearchPage";
import SpoonacularSearchPage from "../SpoonacularSearchPage/SpoonacularSearchPage";
import CartLogPage from "../CartLogPage/CartLogPage";

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
    <Route path="/empty" component={MissingPage} />
    <Route path="/" component={MissingPage} />
  </Switch>
)
export default Routes;