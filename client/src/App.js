import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Overview from "./components/Overview/Overview"
import Form from "./components/Form/Form"
import Cart from "./components/Cart/Cart"
import "./index.css"

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/overview">
                    <Overview />
                </Route>
                <Route path="/form">
                    <Form />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
