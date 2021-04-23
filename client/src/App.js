import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Overview from "./components/Overview/Overview"
import Form from "./components/Form/Form"
import Cart from "./components/Cart/Cart"
import Settings from "./components/Settings/Settings"
import Error from "./components/Error/Error"
import Footer from "./components/Footer/Footer"
import "./index.css"

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Overview />
                </Route>
                <Route path="/form">
                    <Form />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>
                <Route path="/">
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
