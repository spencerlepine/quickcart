import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ViewLayout from './wrappers/ViewLayout/ViewLayout';
import Footer from './components/Footer/Footer';
import Routes from './wrappers/Routes/Routes';
import NotificationsPopup from './components/NotificationsPopup/NotificationsPopup';

const App = () => (
  <>
    <NotificationsPopup />
    <Navbar />
    <ViewLayout>
      <Routes />
    </ViewLayout>
    <Footer />
  </>
);

export default App;
