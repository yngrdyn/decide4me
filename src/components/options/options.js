import React, { Component } from 'react';
import Option from './option';

class Options extends Component {
  removeAll() {
    console.log('remove all!');
  }

  render() {
    return (
      <div>
        <div className="options-header">
          <span>Your options</span>
          <button
            onClick={this.removeAll}
            disabled={!this.props.options || this.props.options.length === 0}>
              Remove all options
          </button>
        </div>
        <div className="options-content">
          { this.props.options && this.props.options.length > 0
            ? <ul>
                {
                  this.props.options.map((option) => 
                    <li key={option}><Option option={option}/></li>
                  )
                }
              </ul>
            : <span>No options</span>
          }
        </div>
      </div>
    );
  }
}

export default Options;
