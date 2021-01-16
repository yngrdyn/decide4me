import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Decision from './components/decision';
import Options from './components/options/options';
import Add from './components/add';

const app = {
  title: 'decime4me',
  subtitle: 'The App for hesitant people',
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
    return (
      <div>
        <Header/>
        <Decision/>
        <Options/>
        <Add/>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <button
          onClick={onDecide4me}
          disabled={app.options.length === 0}>
            Decide for me!
        </button>
        {app.options.length < 1 && (
          <p>No options</p>)}
        {app.options.length > 0 && (
          <button onClick={onRemoveAll}>Remove all options</button>)}
        <ul>
          {
            app.options.map((option) => <li key={option}>{option}</li>)
          }
        </ul>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root-app'));
