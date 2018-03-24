import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './css/ErrorBoundary.css';

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }

  static defaultProps = {
    children: undefined
  }

  state = { error: '', infoStack: '' }

  componentDidCatch(error, info) {
    this.setState(prevState => ({
      ...prevState,
      error: error.message,
      infoStack: info.componentStack
    }));
  }

  render() {
    const {
      boundaryError,
      boundaryErrorTitle,
      boundaryErrorMessage,
      boundaryErrorFooter
    } = Styles;
    const { error, infoStack } = this.state;

    if (!error && !infoStack) {
      return this.props.children;
    }

    return (
      <div className={boundaryError}>
        <h1 className={boundaryErrorTitle}>
          Oh no! You have hit an error that should never have made it into the app!
        </h1>
        <p className={boundaryErrorMessage}>
          {error}
        </p>
        <p className={boundaryErrorFooter}>
          Let me know about this problem via email at <a href={`mailto:bmpieretti@gmail.com?subject=Incident%20Report&amp;body=${error}--${infoStack}`}>bmpieretti@gmail.com</a>.
        </p>
      </div>
    );
  }
}
