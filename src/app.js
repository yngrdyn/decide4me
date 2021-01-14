const app = {
  title: 'decime4me',
  subtitle: 'The App for hesitant people',
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

const rootApp = document.getElementById('root-app');

ReactDOM.render(
  template,
  rootApp,
);
