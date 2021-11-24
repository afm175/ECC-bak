import React from 'react';
import './InputBase.css';

const InputBox = ({ name, value, base, validator, onChange }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    if (validator.test(value)) {
      onChange(parseInt(value, base));
    }
  };
  return (
    <div className='input-box'>
      <label>{name}</label>
      <input
        className = 'input-text'
        type='text'
        onChange={handleChange}
        value={value}
        placeholder={`Enter ${name}`}
      />
    </div>
  );
};

export default InputBox;
