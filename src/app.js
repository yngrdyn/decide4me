import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Decision from './components/decision';
import Options from './components/options/options';
import Add from './components/add';

const app = {
  options: [],
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option && !app.options.includes(option)) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
};

const onRemoveAll = () => app.options = [];

const onDecide4me = () => {
  const randomIndex = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomIndex];
  console.log(option);
}

class App extends Component {
  render() {
    const title = 'decime4me';
    const subtitle = 'The App for hesitant people';
    const options = ['option 1', 'option 2', 'option 3'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Decision/>
        <Options options={options}/>
        <Add/>
        <button
          onClick={onDecide4me}
          disabled={app.options.length === 0}>
            Decide for me!
        </button>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root-app'));
