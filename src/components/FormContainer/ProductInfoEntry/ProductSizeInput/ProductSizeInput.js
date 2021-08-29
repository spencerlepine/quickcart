import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles.js';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const UnitSelector = ({ classes, handleChange, currentUnit }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl className={classes.unitInput}>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        name="unit"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={currentUnit}
        onChange={handleChange}
      >
        <MenuItem value="unit">
          <em>Unit</em>
        </MenuItem>
        <MenuItem value={'oz'}>oz</MenuItem>
        <MenuItem value={'g'}>g</MenuItem>
        <MenuItem value={'fl oz'}>fl oz</MenuItem>
        <MenuItem value={'pound'}>lbs</MenuItem>
      </Select>
    </FormControl>
  );
};

const ProductSizeInput = ({ count, unit, fieldsProps }) => {
  const classes = useStyles();

  const [servingSize, setServingSize] = useState({ count, unit });

  const handleUnitUpdate = event => {
    const { name, value } = event.target;
    if (name === 'count') {
      const newServing = { ...servingSize, count: Number(value) };
      setServingSize(newServing);
      fieldsProps.onChange({ target: { name: 'purchase_size', value: newServing } });
    } else if (name === 'unit') {
      const newServing = { ...servingSize, unit: value };
      setServingSize(newServing);
      fieldsProps.onChange({ target: { name: 'purchase_size', value: newServing } });
    }
  };
  return (
    <div className={classes.productField} >
      <label className={classes.divLabel}>{'Purchase Size'}</label>
      <TextField
        {...fieldsProps}
        className={classes.unitCount}
        name={'count'}
        type={'number'}
        inputProps={{ min: 1 }}
        onChange={handleUnitUpdate}
        value={count || ''}
      />
      <UnitSelector
        classes={classes}
        handleChange={handleUnitUpdate}
        currentUnit={unit}
      />
    </div >
  );
};

export default ProductSizeInput;

UnitSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentUnit: PropTypes.string.isRequired,
};

ProductSizeInput.propTypes = {
  count: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  fieldsProps: PropTypes.object.isRequired,
};
