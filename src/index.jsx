import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppWrapper from './modules/core/components/AppWrapper';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <AppWrapper />
    </AppContainer>,
    document.getElementById('root')
  );
};

document.addEventListener('DOMContentLoaded', () => render());

if (module.hot) {
  module.hot.accept('./modules/core/components/App', () => {
    render();
  });
}
