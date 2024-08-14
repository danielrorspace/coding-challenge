import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './styles.css';
import { FieldProps } from 'formik';

interface PhoneNumberInputProps extends FieldProps {
  disabled?: boolean;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ field, form, disabled, ...props }) => {
  const { setFieldValue } = form;
  const { name, value } = field;

  return (
    <PhoneInput
      country="us"
      value={value}
      onChange={(phone) => setFieldValue(name, phone)}
      containerClass="mui-phone-input"
      inputClass="w-full-css"
      specialLabel="Phone Number"
      inputProps={{
        name: name,
        onBlur: field.onBlur,
        placeholder: '+1 (555) 000-0000',
      }}
      disabled={disabled}
      {...props}
    />
  );
};

export default PhoneNumberInput;
