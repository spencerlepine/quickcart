import React, { useState } from 'react';
// import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import FormContainer from 'components/FormContainer/FormContainer';
import useStyles from './styles.js';

const CreatePage = () => {
  const classes = useStyles();

  const [formEntries, setFormEntries] = useState({});

  return (
    <div className={`create-container ${classes.createContainer}`}>
      <FormContainer item={formEntries} setFormEntries={setFormEntries} />
    </div>
  );
};
console.log('pages/CreatePage HERE COMMETN THIS OFF');
export default CreatePage;//withAuthRedirect(CreatePage);
