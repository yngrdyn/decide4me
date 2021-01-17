import React from 'react';
import ReactDOM from 'react-dom';
import Decide4me from './components/decide4me';

const App = () => {
  return (
    <Decide4me title="decide4me" subtitle="The App for hesitant people"/>
  )
};

ReactDOM.render(<App/>, document.getElementById('root-app'));
