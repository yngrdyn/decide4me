import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Decide4me from './components/decide4me';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route path='/' component={Decide4me} title="decide4me" subtitle="The App for hesitant people"/>
      </Switch>
    </HashRouter>
  )
};

ReactDOM.render(<App/>, document.getElementById('root-app'));
