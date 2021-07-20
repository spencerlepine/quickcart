import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ViewLayout from './wrappers/ViewLayout/ViewLayout';
import Footer from './components/Footer/Footer';
import Routes from './wrappers/Routes/Routes';
import NotificationsPopup from './components/NotificationsPopup/NotificationsPopup';

const App = () => (
  <React.Fragment>
    <NotificationsPopup />
    <Navbar />
    <ViewLayout>
      <Routes />
    </ViewLayout>
    <Footer />
  </React.Fragment>
);

export default App;
