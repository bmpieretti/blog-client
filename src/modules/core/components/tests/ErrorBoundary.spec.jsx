import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import faker from 'faker';
import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary component: ', () => {
  test('should render when error is caught', () => {
    const error = {
      message: 'message'
    };

    const info = {
      componentStack: 'info'
    };

    const component = mount(<ErrorBoundary />);

    // Calling componentDidCatch directly seems to only return the shallowWrapper instead,
    // seems to be an issue on Ezymes side due to an open issue on github
    component.setState({
      error: error.message,
      infoStack: info.componentStack
    });

    expect(mountToJson(component)).toMatchSnapshot();
    component.unmount();
  });

  test('should send email with passed error and info stack', () => {
    const error = {
      message: faker.lorem.word()
    };

    const info = {
      componentStack: faker.lorem.word()
    };

    const emailValue = 'mailto:bmpieretti@gmail.com';
    const subjectLine = '?subject=Incident%20Report&amp;';
    const body = `body=${error.message}--${info.componentStack}`;

    const component = mount(<ErrorBoundary />);
    component.setState({
      error: error.message,
      infoStack: info.componentStack
    });

    expect(component.find('a').getDOMNode().href).toEqual(`${emailValue}${subjectLine}${body}`);
    component.unmount();
  });

  test('should render children when no error', () => {
    const unrenderedElement = (
      <ErrorBoundary>
        <div />
      </ErrorBoundary>
    );

    const component = shallow(unrenderedElement);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
