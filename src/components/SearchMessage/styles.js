import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  messageContainer: {
    width: 'fit-content',
    margin: '2em auto',
    padding: '10px 25px',
    background: 'white',
    minWidth: '100px',
    textAlign: 'center',
    lineHeight: '1.5em',
    scrollbarColor: 'white',
  },
  searchImg: {
    maxHeight: '200px',
    maxWidth: '200px'
  },
  homeLink: {
    color: 'rgb(67, 176, 42)',
    textDecoration: 'none',
  },
  searchMessage: {
    color: 'rgb(114, 118, 12)',
  },
}));