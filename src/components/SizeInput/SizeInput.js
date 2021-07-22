import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles.js';
import grocerySchema from '../../schema/groceryItem';
import toTitleCase from '../../modules/toTitleCase';
import InputLabel from '@material-ui/core/InputLabel';
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
        <MenuItem value={'pound'}>lbs</MenuItem>
      </Select>
    </FormControl>
  )
}

const SizeInput = ({ thisKey, thisGrocery, handleChange }) => {
  const classes = useStyles();
  const groceryUnit = thisGrocery[key] || "1 unit";
  const parseCount = (groceryUnit.match(/^\d+/) || ["1"])[0];
  const parseUnit = (groceryUnit.match(/[ ][a-zA-Z]+$/) || ["unit"])[0].trim()
  const [currentUnit, setCurrentUnit] = useState(parseUnit);
  const [count, setCount] = useState(parseCount);
  const key = thisKey;

  const handleUpdate = (e) => {
    const { target: { name, value } } = e;

    // update the count values
    var newCount = count;
    var newUnit = currentUnit;
    if (name === 'unit') {
      newUnit = value;
      setCurrentUnit(newUnit)
    } else if (name === 'count') {
      newCount = value;
      setCount(newCount)
    }

    const unit = newCount.toString() + ' ' + newUnit.toString();
    // Send the final value to the form
    handleChange({
      ...e,
      target: {
        name: key,
        value: unit,
      }
    });
  }

  return (
    <div className={classes.productField}>
      <label className={classes.divLabel}>{toTitleCase(key)}</label>
      <TextField
        className={classes.unitCount}
        onChange={handleUpdate}
        variant='outlined'
        margin='normal'
        required
        name={'count'}
        placeholder={key}
        type={'Number'}
        disabled={!(typeof thisGrocery[key] === 'string' || typeof thisGrocery[key] === 'number')}
        value={count}
      />
      <UnitSelector
        classes={classes}
        handleChange={handleUpdate}
        currentUnit={currentUnit}
        setCurrentUnit={setCurrentUnit}
      />
    </div>
  );
}

export default SizeInput;
