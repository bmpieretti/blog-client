import React from 'react';
import PropTypes from 'prop-types';
import StyleWrapper from '../styled/App';

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ''
};

export const App = ({ className }) => (
  <main className={className} />
);

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default StyleWrapper(App);
