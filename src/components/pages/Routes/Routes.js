import { Route, Switch } from "react-router-dom"
import { HOME, LOGIN, UPC_SEARCH, SIGNUP, WELCOME, SETTINGS, PANTRY, FORM, CART, CART_LOGS, RECOMMENDED, SEARCH } from "../../../constants/routeConstants"
import UserWelcomePage from "../UserWelcomePage/UserWelcomePage"
import MissingPage from "../MissingPage/MissingPage"
import SignUpPage from "../SignUpPage/SignUpPage"
import LogInPage from "../LogInPage/LogInPage"
import CartPage from "../CartPage/CartPage"
import FormPage from "../FormPage/FormPage"
import PantryPage from "../PantryPage/PantryPage"
import RecommendedPage from "../RecommendedPage/RecommendedPage"
import SettingsPage from "../SettingsPage/SettingsPage"
import BrowseGroceries from "../BrowseGroceriesPage/BrowseGroceriesPage"
import SpoonUPCSearchPage from "../SpoonUPCSearchPage/SpoonUPCSearchPage"
import SpoonacularSearchPage from "../SpoonacularSearchPage/SpoonacularSearchPage"
import CartLogPage from "../CartLogPage/CartLogPage"

const Routes = () => (
  <Switch>
    <Route exact path={HOME} component={BrowseGroceries} />
    <Route exact path={WELCOME} component={UserWelcomePage} />
    <Route path={CART_LOGS} component={CartLogPage} />
    <Route path={LOGIN} component={LogInPage} />
    <Route path={SIGNUP} component={SignUpPage} />
    <Route path={FORM} component={FormPage} />
    <Route path={CART} component={CartPage} />
    <Route path={PANTRY} component={PantryPage} />
    <Route path={RECOMMENDED} component={RecommendedPage} />
    <Route path={SETTINGS} component={SettingsPage} />
    <Route path={SEARCH} component={SpoonacularSearchPage} />
    <Route path={UPC_SEARCH} component={SpoonUPCSearchPage} />
    <Route path="/empty" component={MissingPage} />
    <Route path="/" component={MissingPage} />
  </Switch>
)
export default Routes