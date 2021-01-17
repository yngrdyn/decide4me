import React, { Component } from 'react';

class Decision extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.decide}
          disabled={this.props.disabled}>
            Decide for me!
        </button>
      </div>
    );
  }
}

export default Decision;
