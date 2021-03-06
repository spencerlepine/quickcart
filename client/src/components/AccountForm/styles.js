import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  accountForm: {
    textAlign: 'center',
    minWidth: '250px',
    zIndex: '99',
    backgroundColor: 'white',
    margin: 'auto',
    marginTop: '12vh',
    marginBottom: '5vh',
    padding: '30px',
    borderRadius: '8px',
    width: 'fit-content',
    '& input': {
      zIndex: '99',
      backgroundColor: 'rgb(255, 255, 255)',
      border: '1px solid rgb(189, 189, 189)',
      borderRadius: '12px',
      boxSizing: 'border-box',
      color: 'rgb(66, 66, 66)',
      fontSize: '16px',
      height: '56px',
      padding: '20px 8px 8px',
      position: 'relative',
      width: '100%',
      opacity: '1',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
      backgroundSize: '16px 18px',
      backgroundPosition: '98% 50%',
      cursor: 'auto',
      margin: '10px auto 20px auto',
    },
  },
  loginButton: {
    zIndex: '99',
    touchAction: 'manipulation',
    cursor: 'pointer',
    border: '1px solid transparent',
    borderRadius: '4px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    WebkitFontSmoothing: 'antialiased',
    backgroundImage: 'none',
    display: 'block',
    alignItems: 'center',
    paddingLeft: '16px',
    paddingRight: '16px',
    fontSize: '18px',
    height: '40px',
    backgroundColor: 'rgb(46, 137, 19)',
    color: 'rgb(255, 255, 255)',
    width: '100%',
  },
  accountMessage: {
    margin: '12px auto',
    width: 'fit-content',
    fontSize: '15px',
    color: 'rgb(66, 66, 66)',
  },
  accountRedirect: {
    width: 'fit-content',
    margin: 'auto',
    '& a': {
      margin: '12px auto',
      width: 'fit-content',
      touchAction: 'manipulation',
      cursor: 'pointer',
      border: '1px solid transparent',
      borderRadius: '4px',
      fontWeight: '600',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      WebkitFontSmoothing: 'antialiased',
      backgroundImage: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      paddingLeft: '24px',
      paddingRight: '24px',
      fontSize: '18px',
      height: 'auto',
      backgroundColor: 'transparent',
      color: 'rgb(67, 176, 42)',
      textDecoration: 'none',
    },
  },
  logoImg: {
    minWidth: '245px',
    minHeight: '56px',
    height: '8vh',
  },
}));
