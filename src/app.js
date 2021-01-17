import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Decision from './components/decision';
import Options from './components/options/options';
import Add from './components/add';

class App extends Component {
  constructor(props) {
    super(props);

    this.addOption = this.addOption.bind(this);
    this.decide = this.decide.bind(this);
    this.removeAllOptions = this.removeAllOptions.bind(this);

    this.state = {
      options: [],
    };
  }

  addOption(option) {
    if (!option) {
      return 'Enter a valid option';
    } else if (this.state.options.includes(option)) {
      return 'This option already exists';
    }

    this.setState((state) => {
      return {
        options: [...state.options, option],
      }
    });
  }

  decide() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex];
    console.log(option);
  }

  removeAllOptions() {
    this.setState(() => {
      return {
        options: [],
      }
    });
  }

  render() {
    const title = 'decime4me';
    const subtitle = 'The App for hesitant people';
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Decision
          decide={this.decide}
          disabled={this.state.options.length === 0}/>
        <Options
          options={this.state.options}
          removeAllOptions={this.removeAllOptions}/>
        <Add
          addOption={this.addOption}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root-app'));
