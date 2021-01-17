import React  from 'react';

const Option = (props) => {
  return (
    <div>
      <span>{ props.option }</span>
      <button
        onClick={() => props.removeOption(props.option)}>
          Remove</button>
    </div>
  );
}

export default Option;
