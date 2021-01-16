import React, { Component } from 'react';

class Option extends Component {
  render() {
    return (
      <div>
        { this.props.option }
      </div>
    );
  }
}

export default Option;
