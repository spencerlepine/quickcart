import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout"
import Footer from "./components/Footer/Footer"
import Routes from "./components/Routes/Routes";
import NotificationsPopup from "./components/NotificationsPopup/NotificationsPopup"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const history = createBrowserHistory();
  
  return (
    <Router history={history}>
      <NotificationsPopup />
      <Navbar />
      <Layout>
        <Routes />
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
