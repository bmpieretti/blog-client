import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ErrorBoundary } from '../ErrorBoundary';

describe('ErrorBoundary Component: ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ErrorBoundary>Test</ErrorBoundary>);
  });

  test('should render children when no errors', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render Error when componentDidCatch', () => {
    const error = new Error('test');

    expect(wrapper.state('error')).toBe('');
    expect(wrapper.state('infoStack')).toBe('');

    wrapper.simulateError(error);

    expect(wrapper.state('error')).toBe(error.message);
    expect(wrapper.state('infoStack')).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
