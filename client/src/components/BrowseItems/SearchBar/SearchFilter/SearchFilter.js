import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import useStyles from './styles.js';

const SearchFilter = ({ sortMode, setSortMode }) => {
  const classes = useStyles();

  const handleChange = e => {
    const { name, value } = e.target;

    setSortMode(prevMode => ({
      ...prevMode,
      [name]: value,
    }));
  };

  const sortOptions = ['Purchase Price', 'Name', 'Purchase Size'].map((category, i) => (
    <option key={i} value={category}>{category}</option>
  ));
  const sortDropdowns = [<option label='SORT BY' value='' key={999} />, ...sortOptions];
  const orderDropdowns = [<option label='ORDER BY' value='' key={999} />, <option label='DESC' value='desc' key={98} />, <option label='ASC' value='asc' key={99} />];

  return (
    <React.Fragment>
      <Select
        className={classes.orderOption}
        native
        value={sortMode['sortBy'] || ''}
        onChange={handleChange}
        inputProps={{
          name: 'sortBy',
          id: 'age-native-simple',
        }}
      >
        {sortDropdowns}
      </Select>

      <Select
        className={classes.orderOption}
        native
        value={sortMode['orderBy'] || ''}
        onChange={handleChange}
        inputProps={{
          name: 'orderBy',
          id: 'age-native-simple',
        }}
      >
        {orderDropdowns}
      </Select>
    </React.Fragment>
  );
};

export default SearchFilter;

SearchFilter.propTypes = {
  sortMode: PropTypes.object.isRequired,
  setSortMode: PropTypes.func.isRequired,
};
