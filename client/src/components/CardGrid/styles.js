import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cardGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'scroll',
  },
  viewMoreBtn: {
    background: '#dba13a',
    color: '#833c0c',
    border: '4px solid #a98612',
    fontWeight: '800',
    borderRadius: '1em',
    margin: 'auto 1em',
    fontSize: '1.5em',
    maxWidth: '100px',
    height: '6em',
  },
}));
