import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./wrappers/Layout/Layout";
import Footer from "./components/Footer/Footer";
import Routes from "./wrappers/Routes/Routes";
import NotificationsPopup from "./components/NotificationsPopup/NotificationsPopup";

const App = () => (
  <>
    <NotificationsPopup />
    <Navbar />
    <Layout>
      <Routes />
    </Layout>
    <Footer />
  </>
);

export default App;
