import React from 'react';

import { Grid, TextField } from '@mui/material';

import { useState, useReducer } from 'react';
import Button from '../ui/button/Button';
import './ContactForm.css';
import { submitForm } from './ContactFormSubmit';
import EmailRegex from './EmailRegex';

const firstNameReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return { value: action.val, isValid: action.val.length };
    case 'INPUT_BLUR':
      return { value: state.value, isValid: state.value.length };
    default:
      return { value: '', isValid: false };
  }
};

const lastNameReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return { value: action.val, isValid: action.val.length };
    case 'INPUT_BLUR':
      return { value: state.value, isValid: state.value.length };
    default:
      return { value: '', isValid: false };
  }
};

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.length && action.val.match(EmailRegex),
      invalidReason: !action.val.length
        ? 'Field cannot be blank'
        : !action.val.match(EmailRegex)
        ? 'Invalid email'
        : '',
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.length && state.value.match(EmailRegex),
      invalidReason: !state.value.length
        ? 'Field cannot be blank'
        : !state.value.match(EmailRegex)
        ? 'Invalid email'
        : '',
    };
  }
  return {
    value: '',
    isValid: false,
    invalidReason: '',
  };
};

const messageReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return { value: action.val, isValid: action.val.length };
    case 'INPUT_BLUR':
      return { value: state.value, isValid: state.value.length };
    default:
      return { value: '', isValid: false };
  }
};

const ContactForm = () => {
  const [firstNameState, dispatchFirstName] = useReducer(firstNameReducer, {
    value: '',
    isValid: undefined,
  });

  const [lastNameState, dispatchLastName] = useReducer(lastNameReducer, {
    value: '',
    isValid: undefined,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: undefined,
    invalidReason: '',
  });

  const [messageState, dispatchMessage] = useReducer(messageReducer, {
    value: '',
    isValid: undefined,
  });

  const [formSent, setFormSent] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const validateForm = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    try {
      submitForm(event);
      setFormSent(true);
      setFormIsValid(false);
    } catch {
      setFormSent(false);
    }
  };

  // Change Handlers
  const firstNameChangeHandler = (event) => {
    dispatchFirstName({ type: 'USER_INPUT', val: event.target.value });
    setFormIsValid(
      event.target.value.length &&
        lastNameState.isValid &&
        emailState.isValid &&
        messageState.isValid
    );
    setFormSent(false);
  };

  const lastNameChangeHandler = (event) => {
    dispatchLastName({ type: 'USER_INPUT', val: event.target.value });
    setFormIsValid(
      firstNameState.isValid &&
        event.target.value.length &&
        emailState.isValid &&
        messageState.isValid
    );
    setFormSent(false);
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    setFormIsValid(
      firstNameState.isValid &&
        lastNameState.isValid &&
        event.target.value.length &&
        event.target.value.match(EmailRegex) &&
        messageState.isValid
    );
    setFormSent(false);
  };

  const messageChangeHandler = (event) => {
    dispatchMessage({ type: 'USER_INPUT', val: event.target.value });
    setFormIsValid(
      firstNameState.isValid &&
        lastNameState.isValid &&
        emailState.isValid &&
        event.target.value.length
    );

    setFormSent(false);
  };

  // Input validations
  const validateFirstName = () => {
    dispatchFirstName({ type: 'INPUT_BLUR' });
  };

  const validateLastName = () => {
    dispatchLastName({ type: 'INPUT_BLUR' });
  };

  const validateEmail = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validateMessage = () => {
    dispatchMessage({ type: 'INPUT_BLUR' });
  };

  return (
    <form className='contact-form' onSubmit={validateForm}>
      <Grid container spacing={2}>
        {/* First name */}
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            id='first-name'
            label='First Name *'
            name='first_name'
            error={
              firstNameState.isValid !== undefined && !firstNameState.isValid
            }
            onChange={firstNameChangeHandler}
            onBlur={validateFirstName}
          />
          {firstNameState.isValid === false && (
            <p className='contact-form__message--error'>
              Field cannot be blank
            </p>
          )}
        </Grid>
        {/* Last name */}
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            id='last-name'
            label='Last Name *'
            name='last_name'
            error={
              lastNameState.isValid !== undefined && !lastNameState.isValid
            }
            onChange={lastNameChangeHandler}
            onBlur={validateLastName}
          />
          {lastNameState.isValid === false && (
            <p className='contact-form__message--error'>
              Field cannot be blank
            </p>
          )}
        </Grid>
      </Grid>
      {/* Email */}
      <TextField
        className='contact-form__field'
        id='email'
        label='Email *'
        name='email'
        type='email'
        error={emailState.isValid !== undefined && !emailState.isValid}
        onChange={emailChangeHandler}
        onBlur={validateEmail}
      />
      {!emailState.isValid && emailState.isValid !== undefined && (
        <p className='contact-form__message--error'>
          {emailState.invalidReason}
        </p>
      )}

      {/* Message */}
      <TextField
        className='contact-form__field'
        multiline
        maxRows={4}
        id='message'
        label='Your Message *'
        name='message'
        error={messageState.isValid !== undefined && !messageState.isValid}
        onChange={messageChangeHandler}
        onBlur={validateMessage}
      />
      {messageState.isValid === false && (
        <p className='contact-form__message--error'>Field cannot be blank</p>
      )}

      <Button className='btn-standard-light' disabled={!formIsValid}>
        Submit
      </Button>
      {formSent && <p className='contact-form__message--success'>Form sent!</p>}
    </form>
  );
};

export default ContactForm;
