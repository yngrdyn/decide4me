import React from 'react';

const Checkbox = (props) => (
    <label className="checkbox-container">
        <input type="checkbox" checked={props.checked} onChange={props.handleChange}  />
            <span className="checkmark"/> {props.label}
    </label>

);

export default Checkbox;
