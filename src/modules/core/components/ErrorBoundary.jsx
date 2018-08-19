import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoundaryError from '../styled/ErrorBoundary';
import { ErrorP } from '../../../styles/Base';

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }

  static defaultProps = {
    children: null
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
    const { error, infoStack } = this.state;

    if (!error && !infoStack) {
      return this.props.children;
    }

    return (
      <BoundaryError>
        <h1>
          Oh no! You have hit an error that should never have made it into the app!
        </h1>
        <ErrorP>
          {error}
        </ErrorP>
        <footer>
          Let me know about this problem via email at <a href={`mailto:bmpieretti@gmail.com?subject=Incident%20Report&amp;body=${error}--${infoStack}`}>bmpieretti@gmail.com</a>.
        </footer>
      </BoundaryError>
    );
  }
}
