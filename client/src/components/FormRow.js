import React from 'react';

const FormRow = ({ label, htmlFor, id, type, name, value, handleChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>
      <input
        className="form-input"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
