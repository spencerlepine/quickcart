import React from 'react';
import useStyles from './styles.js';
import ValueFiller from './ValueFiller/ValueFiller';
import getMissingFields from '../../modules/getMissingFields';
import DetailsPopup from './DetailsPopup/DetailsPopup';
import ValueSearcher from './ValueFiller/ValueSearcher/ValueSearcher';

const MissingFieldPrompt = ({ handleChange, groceryItem }) => {
  const classes = useStyles();
  const missingFields = getMissingFields(groceryItem);

  const Prompt = ({ field }) => {
    return (
      <ValueFiller
        handleChange={handleChange}
        fieldName={field || ''}
        UPC={groceryItem['upc']}
        ID={groceryItem['_id']}
        name={groceryItem['name']}>
      </ValueFiller>
    )
  }

  const missingPrompts = missingFields.map((field, i) => (
    <DetailsPopup
      key={i}
      CardComponent={<Prompt key={field} field={field} />}
      DetailsComponent={<ValueSearcher handleChange={handleChange}
        fieldName={field}
        UPC={groceryItem['upc']}
        ID={groceryItem['_id']}
        name={groceryItem['name']} />}
    />
  ));

  return (
    <div className={classes.missingPromptContainer}>
      {missingPrompts}
    </div >
  );
}

export default MissingFieldPrompt;