import React, { Component } from 'react';
import Option from './option';

class Options extends Component {
  render() {
    return (
      <div>
        <div className="options-header">
          <span>Your options</span>
          <button
            onClick={this.props.removeAllOptions}
            disabled={!this.props.options || this.props.options.length === 0}>
              Remove all options
          </button>
        </div>
        <div className="options-content">
          { this.props.options && this.props.options.length > 0
            ? <div>
                {
                  this.props.options.map((option) => 
                    <Option key={option} option={option}/>
                  )
                }
              </div>
            : <span>No options</span>
          }
        </div>
      </div>
    );
  }
}

export default Options;
