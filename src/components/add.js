import React, { Component } from 'react';

class Add extends Component {
  addOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
      console.log(`Add ${option}`);
    }
  }

  render() {
    return (
      <form onSubmit={this.addOption}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    );
  }
}

export default Add;
