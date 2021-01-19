import React  from 'react';

const Option = (props) => (
  <div className="option">
    <span className="option__text">{ props.option }</span>
    <button
      className="button__link"
      onClick={() => props.removeOption(props.option)}>
        Remove</button>
  </div>
);

export default Option;
