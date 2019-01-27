import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './modules/core/components/App';
import GlobalStyles from './modules/core/components/GlobalStyles';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <React.Fragment>
        <Component />
        <GlobalStyles />
      </React.Fragment>
    </AppContainer>,
    document.getElementById('root')
  );
};

document.addEventListener('DOMContentLoaded', () => {
  render(App);
});

if (module.hot) {
  module.hot.accept('./modules/core/components/App', () => {
    render(App);
  });
}
