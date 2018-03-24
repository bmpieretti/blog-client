import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import { helixPlusClient } from './css/App.css';

const App = () => (
  <ErrorBoundary>
    <div className={helixPlusClient} />
  </ErrorBoundary>
);

export default App;
