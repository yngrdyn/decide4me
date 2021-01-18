import React from 'react';

const Decision = (props) => (
  <div>
    <button
      onClick={props.decide}
      disabled={props.disabled}>
        Decide for me!
    </button>
  </div>
);

export default Decision;
