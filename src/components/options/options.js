import React from 'react';
import Option from './option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button
        className="button__link"
        onClick={props.removeAllOptions}
        disabled={!props.options || props.options.length === 0}>
          Remove all
      </button>
    </div>
    <div className="widget-content">
      { props.options && props.options.length > 0
        ? <div>
            {
              props.options.map((option) => 
                <Option
                  key={option}
                  option={option}
                  removeOption={props.removeOption}/>
              )
            }
          </div>
        : <span>Please add an option to get started!</span>
      }
    </div>
  </div>
);

export default Options;
