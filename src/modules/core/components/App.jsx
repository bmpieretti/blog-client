import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import { Main } from '../styled/App';

const App = () => (
  <ErrorBoundary>
    <Main />
  </ErrorBoundary>
);

export default App;
