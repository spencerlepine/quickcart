import React from 'react';
import useStyles from './styles';

const LoadMoreBtn = ({ displayStarters, setDisplayStarters, loading }) => {
  const classes = useStyles();

  const handleClick = () => {
    setDisplayStarters(false);
  }

  if (displayStarters && !loading) {
    return (
      <button
        onClick={handleClick}
        className={classes.loadMoreBtn}>
        Load More
      </button>
    )
  } else { return null; }

}

export default LoadMoreBtn;
