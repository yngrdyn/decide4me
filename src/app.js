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
    this.removeOption = this.removeOption.bind(this);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.decide = this.decide.bind(this);

    this.state = {
      options: props.options,
    };
  }

  addOption(option) {
    if (!option) {
      return 'Enter a valid option';
    } else if (this.state.options.includes(option)) {
      return 'This option already exists';
    }

    this.setState((state) => ({
      options: [...state.options, option],
    }));
  }

  removeOption(option) {
    this.setState((state) => ({
      options: state.options.filter((stateOption) => stateOption !== option),
    }));
  }

  removeAllOptions() {
    this.setState(() => ({ options: [] }));
  }

  decide() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex];
    console.log(option);
  }

  render() {
    return (
      <div>
        <Header
          title={this.props.title}
          subtitle={this.props.subtitle}/>
        <Decision
          decide={this.decide}
          disabled={this.state.options.length === 0}/>
        <Options
          options={this.state.options}
          removeOption={this.removeOption}
          removeAllOptions={this.removeAllOptions}/>
        <Add
          addOption={this.addOption}/>
      </div>
    );
  }
}

App.defaultProps = {
  title: 'decide4me',
  subtitle: 'The App for hesitant people',
  options: [],
}

ReactDOM.render(<App/>, document.getElementById('root-app'));
