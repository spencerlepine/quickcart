import { Route, Switch } from "react-router-dom"
import { HOME, LOGIN, SIGNUP, WELCOME, SETTINGS, PANTRY, FORM, CART, RECOMMENDED } from "../../constants/routeConstants"
import UserWelcome from "../UserWelcome/UserWelcome"
import MissingPage from "../MissingPage/MissingPage"
import SignUp from "../SignUp/SignUp"
import LogIn from "../LogIn/LogIn"
import BrowseGroceries from "../BrowseGroceries/BrowseGroceries"

const Routes = () => (
  <Switch>
    <Route exact path={HOME} component={BrowseGroceries} />
    <Route exact path={WELCOME} component={UserWelcome} />
    <Route path={LOGIN} component={LogIn} />
    <Route path={SIGNUP} component={SignUp} />
    <Route path="/empty" component={MissingPage} />
    <Route path="/" component={MissingPage} />
  </Switch>
)
export default Routes