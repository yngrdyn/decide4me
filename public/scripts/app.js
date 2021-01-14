'use strict';

var template = React.createElement(
  'p',
  null,
  'This is JSX from app.js!'
);

var rootApp = document.getElementById('root-app');

ReactDOM.render(template, rootApp);
