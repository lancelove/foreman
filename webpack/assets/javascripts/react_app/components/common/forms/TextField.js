import React from 'react';
import { Field } from 'redux-form';

import CommonForm from './CommonForm';

const renderField = ({
  input, label, type, required, className, meta: { touched, error },
}) =>
  (<CommonForm
    label={label}
    className={className}
    touched={touched}
    required={required}
    error={error}
  >
    {type === 'textarea' ?
      <textarea {...input} className="form-control" /> :
      <input {...input} type={type} className={type === 'checkbox' ? '' : 'form-control'} />}
   </CommonForm>);

const TextField = ({
  name, label, type = 'text', className = '', required, validate,
}) => (
  <Field
    name={name}
    type={type}
    component={renderField}
    required={required}
    className={className}
    label={label}
    validate={validate}
  />
);

export default TextField;
