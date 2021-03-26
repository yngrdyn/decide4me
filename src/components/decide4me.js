import React, { Component } from 'react';
import { isEmpty, remove } from 'lodash';

import Header from './header';
import Decision from './decision';
import Options from './options/options';
import Add from './add';
import Selected from './options/selected';
import Checkbox from "./checkbox/checkbox";

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
const shuffle = (options) => {
  const shuffleOptions = [...options];

  for (let i = shuffleOptions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffleOptions[i], shuffleOptions[j]] = [shuffleOptions[j], shuffleOptions[i]];
  }

  return shuffleOptions;
}

class Decide4me extends Component {
  constructor(props) {
    super(props);

    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.decide = this.decide.bind(this);
    this.clearSelectedOption = this.clearSelectedOption.bind(this);
    this.changeRemovalAfterSelectionSetting = this.changeRemovalAfterSelectionSetting.bind(this);

    this.state = {
      options: [],
      selectedOption: undefined,
      removeAfterSelection: false,
    };
  }

  componentDidMount() {
    try {
      const stringifyOptions = localStorage.getItem('options');
      const optionsFromLocal = JSON.parse(stringifyOptions);

      const search = this.props.location.search;
      const fromURL = new URLSearchParams(search).get('options');

      const options =
      [...new Set(
        [
          ...optionsFromLocal,
          ...(isEmpty(fromURL) ? [] : fromURL.split(',')).filter(option => !isEmpty(option)),
        ]
      )];

      if (options) {
        this.setState({options});
      }

      const stringifySettings = localStorage.getItem('removeAfterSelection');
      const removeAfterSelection = JSON.parse(stringifySettings);

      if (removeAfterSelection) {
        this.setState({removeAfterSelection});
      }
    
    } catch (e) { }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const stringifyOptions = JSON.stringify(this.state.options);
      localStorage.setItem('options', stringifyOptions);
    }

    if (prevState.removeAfterSelection !== this.state.removeAfterSelection) {
      const stringifySettings = JSON.stringify(this.state.removeAfterSelection);
      localStorage.setItem('removeAfterSelection', stringifySettings);
    }
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
    const optionsSuffled = shuffle(this.state.options);
    const randomIndex = Math.floor(Math.random() * optionsSuffled.length);
    const option = optionsSuffled[randomIndex];
    this.setState(() => ({ selectedOption: option }));
  }

  clearSelectedOption() {
    if(this.state.removeAfterSelection){
      this.removeOption(this.state.selectedOption);
    }
    this.setState(() => ({ selectedOption: undefined }));
  }

  changeRemovalAfterSelectionSetting(event) {
    const value = event.target.checked;
    this.setState(() => ({
      removeAfterSelection: value
    }));
  }

  render() {
    return (
      <div>
        <Header
          subtitle="The App for hesitant people"/>
        <div className="container">
          <Decision
            decide={this.decide}
            disabled={this.state.options.length === 0}/>
          <div className="full-width widget">
            <Options
              options={this.state.options}
              removeOption={this.removeOption}
              removeAllOptions={this.removeAllOptions}/>
            <Add
              addOption={this.addOption}/>
          </div>
          <div className="full-width">
            <Checkbox checked={this.state.removeAfterSelection}
              handleChange={this.changeRemovalAfterSelectionSetting}
              label={"Remove option after selection"}/>
          </div>
          <Selected
            selectedOption={this.state.selectedOption}
            clearSelectedOption={this.clearSelectedOption}/>
        </div>
      </div>
    );
  }
}

export default Decide4me;
