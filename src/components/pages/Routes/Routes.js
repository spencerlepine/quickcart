import { Route, Switch } from "react-router-dom"
import { HOME, LOGIN, UPC_SEARCH, SIGNUP, WELCOME, SETTINGS, PANTRY, FORM, CART, CART_LOGS, RECOMMENDED, SEARCH } from "../../constants/routeConstants"
import UserWelcome from "../UserWelcome/UserWelcome"
import MissingPage from "../MissingPage/MissingPage"
import SignUp from "../SignUp/SignUp"
import LogIn from "../LogIn/LogIn"
import CartPage from "../CartPage/CartPage"
import FormPage from "../FormPage/FormPage"
import PantryPage from "../PantryPage/PantryPage"
import RecommendedPage from "../RecommendedPage/RecommendedPage"
import Settings from "../Settings/Settings"
import BrowseGroceries from "../BrowseGroceries/BrowseGroceries"
import SpoonUPCSearch from "../SpoonUPCSearch/SpoonUPCSearch"
import SpoonacularSearch from "../SpoonacularSearch/SpoonacularSearch"
import CartLogPage from "../CartLogPage/CartLogPage"

const Routes = () => (
  <Switch>
    <Route exact path={HOME} component={BrowseGroceries} />
    <Route exact path={WELCOME} component={UserWelcome} />
    <Route path={CART_LOGS} component={CartLogPage} />
    <Route path={LOGIN} component={LogIn} />
    <Route path={SIGNUP} component={SignUp} />
    <Route path={FORM} component={FormPage} />
    <Route path={CART} component={CartPage} />
    <Route path={PANTRY} component={PantryPage} />
    <Route path={RECOMMENDED} component={RecommendedPage} />
    <Route path={SETTINGS} component={Settings} />
    <Route path={SEARCH} component={SpoonacularSearch} />
    <Route path={UPC_SEARCH} component={SpoonUPCSearch} />
    <Route path="/empty" component={MissingPage} />
    <Route path="/" component={MissingPage} />
  </Switch>
)
export default Routes