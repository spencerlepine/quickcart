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
    overflowY: 'scroll',
    visibility: 'visible',
    opacity: '1',
    borderRadius: '5px',
    width: '80%',
    transition: 'all 1s ease-in-out',
    minWidth: '300px',
    height: '100%',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    msOverflowDtyle: 'none',
    scrollbarWidth: 'none',
    margin: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
}));
