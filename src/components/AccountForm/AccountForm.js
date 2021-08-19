import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import QuickCartLogo from 'assets/images/QuickCart-Logo.png';
import useStyles from './styles.js';

const AccountForm = props => {
  const classes = useStyles();
  const {
    CorrectionFormLink,
    FormFields,
    WrongFormLabel,
    CorrectionFormName,
    SubmitLabel,
    FormTitle,
    handleSubmit,
  } = props;

  const [formEntries, setFormEntries] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setFormEntries(prevEntries => ({
      ...prevEntries,
      [name]: value,
    }));
  };

  return (
    <div className="account-form">
      <img
        src={QuickCartLogo}
        alt="QuickCart Logo"
        className={classes.logoImg}
      ></img>

      <h2>{FormTitle}</h2>

      {FormFields.map(({ name, placeholder }, i) => (
        <input
          key={i}
          onChange={handleChange}
          type={name}
          name={name}
          value={formEntries[name] || ''}
          placeholder={placeholder}
        ></input>
      ))}

      <button onClick={() => handleSubmit(formEntries)} className={classes.loginButton}>
        {SubmitLabel}
      </button>
      <hr />
      <p className={classes.accountMessage}>{WrongFormLabel}</p>

      <div className={classes.accountRedirect}>
        <Link to={CorrectionFormLink}>{CorrectionFormName}</Link>
      </div>
    </div>
  );
};

export default AccountForm;

AccountForm.propTypes = {
  CorrectionFormLink: PropTypes.string.isRequired,
  FormFields: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  WrongFormLabel: PropTypes.string.isRequired,
  CorrectionFormName: PropTypes.string.isRequired,
  SubmitLabel: PropTypes.string.isRequired,
  FormTitle: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
