import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  detailsPopup: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'rgba(0, 0, 0, 0.7)',
    transition: 'opacity 500ms',
    zIndex: '200',
    height: '100%',
  },
  popupChild: {
    maxHeight: '80%',
    visibility: 'visible',
    opacity: '1',
    borderRadius: '5px',
    width: 'fit-conent',
    minWidth: '300px',
    height: 'fit-content',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    msOverflowDtyle: 'none',
    scrollbarWidth: 'none',
    margin: '0',
    position: 'absolute',
    zIndex: '99',
    top: '50%',
    left: '50%',
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  closeBtn: {
    zIndex: '10',
    height: '42px',
    width: '42px',
    fontSize: '2.5em',
    color: 'rgb(190 32 32)',
    backgroundColor: 'white',
    border: '4px solid rgb(190 32 32)',
    borderRadius: '50%',
    position: 'absolute',
    top: '-0.5em',
    right: '-0.5em',
    touchAction: 'manipulation',
    fontWeight: '100',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    webkitFontSmoothing: 'antialiased',
    backgroundImage: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0px',
    justifyContent: 'center',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 4px',
    },
  },
}));
