import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);

    this.addOption = this.addOption.bind(this);

    this.state = {
      error: undefined,
    }
  }

  addOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={this.addOption}>
        <div>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </div>
        {this.state.error &&
          <span>{this.state.error}</span>}
      </form>
    );
  }
}

export default Add;
