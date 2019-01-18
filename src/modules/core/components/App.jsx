import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import { Main } from '../styled/App';

const App = () => (
  <ErrorBoundary>
    <Main />
    <div> Hello World! </div>
  </ErrorBoundary>
);

export default App;
