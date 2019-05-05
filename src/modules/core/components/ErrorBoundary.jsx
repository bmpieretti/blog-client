import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyleWrapper from '../styled/ErrorBoundary';

export class ErrorBoundary extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }

  static defaultProps = {
    className: '',
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
    const { className, children } = this.props;
    const { error, infoStack } = this.state;

    if (!error) {
      return children;
    }

    return (
      <div className={className}>
        <h1>
          Oh no! You have hit an error!
        </h1>
        <p>
          {error}
        </p>
        <footer>
          Let me know about this problem via email at
          <a
            href={`mailto:bmpieretti@gmail.com?subject=Incident%20Report&amp;body=${error}--${infoStack}`}
          >
            bmpieretti@gmail.com
          </a>
        </footer>
      </div>
    );
  }
}

export default StyleWrapper(ErrorBoundary);
