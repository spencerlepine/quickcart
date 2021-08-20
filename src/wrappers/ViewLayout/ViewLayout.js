import React from 'react';
import PropTypes from 'prop-types';
import { NotificationsProvider } from 'context/NotificationsContext/NotificationsContext';
import { AuthProvider } from 'context/AuthContext/AuthContext';
import NotificationsPopup from 'components/ui/NotificationsPopup/NotificationsPopup';
import Footer from 'components/ui/Footer/Footer';
import Navbar from 'components/ui/Navbar/Navbar';
import useStyles from './styles.js';

const ViewLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AuthProvider>
        <NotificationsProvider>
          <NotificationsPopup />
          <Navbar />
          <div className={`${classes.container}`}>{children}</div>
          <div className={classes.footerSpacing}></div>
          <Footer />
        </NotificationsProvider>
      </AuthProvider>
    </React.Fragment>
  );
};

export default ViewLayout;

ViewLayout.propTypes = {
  children: PropTypes.any.isRequired,
};
