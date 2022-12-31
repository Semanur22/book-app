import React from 'react';
function MyRadioButton(props) {
  return (
    <label>
      <input
        type="radio"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      {props.label}
    </label>
  );
}

export default MyRadioButton;