import React, { Component } from 'react';

class Decision extends Component {
  makeDecision() {
    console.log('make decision!');
  }

  render() {
    return (
      <div>
        <button
          onClick={this.makeDecision}
          disabled={this.props.disabled}>
            Decide for me!
        </button>
      </div>
    );
  }
}

export default Decision;
