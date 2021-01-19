import React  from 'react';

const Option = (props) => (
  <div>
    <span>{ props.option }</span>
    <button
      className="button__link"
      onClick={() => props.removeOption(props.option)}>
        Remove</button>
  </div>
);

export default Option;
