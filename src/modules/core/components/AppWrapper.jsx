import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import GlobalStyles from './GlobalStyles';
import App from './App';

export default () => (
  <React.Fragment>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    <GlobalStyles />
  </React.Fragment>
);
