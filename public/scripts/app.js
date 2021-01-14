'use strict';

var app = {
  title: 'decime4me',
  subtitle: 'The App for hesitant people'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  )
);

var rootApp = document.getElementById('root-app');

ReactDOM.render(template, rootApp);
