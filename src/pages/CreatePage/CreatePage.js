import React from 'react';
// import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import FormContainer from 'components/FormContainer/FormContainer';
import useStyles from './styles.js';

const CreatePage = () => {
  const classes = useStyles();

  return (
    <div className={`create-container ${classes.createContainer}`}>
      <FormContainer />
    </div>
  );
};
console.log('pages/CreatePage HERE COMMETN THIS OFF');
export default CreatePage;//withAuthRedirect(CreatePage);
