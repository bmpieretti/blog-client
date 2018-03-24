import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import ErrorBoundary from '../ErrorBoundary';

describe('App Component', () => {
  test('should render self when error is caught', () => {
    // Given
    const boundaryClass = 'boundaryError';
    const boundaryErrorTitle = 'boundaryErrorTitle';
    const boundaryErrorMessage = 'boundaryErrorMessage';
    const boundaryErrorFooter = 'boundaryErrorFooter';
    const error = {
      message: faker.random.word()
    };

    const info = {
      componentStack: faker.random.words()
    };

    const errorTitle = 'Oh no! You have hit an error that should never have made it into the app!';
    const errorFooter = `<p class="boundaryErrorFooter">Let me know about this problem via email at <a href="mailto:bmpieretti@gmail.com?subject=Incident%20Report&amp;amp;body=${error.message}--${info.componentStack}">bmpieretti@gmail.com</a>.</p>`;

    // When
    const element = shallow(<ErrorBoundary />);
    element.instance().componentDidCatch(error, info);
    element.update();

    // then
    expect(element.state().error).toBe(error.message);
    expect(element.state().infoStack).toBe(info.componentStack);

    expect(element.find('div').first().hasClass(boundaryClass)).toBe(true);

    expect(element.find('h1').first().hasClass(boundaryErrorTitle)).toBe(true);
    expect(element.find('h1').first().text()).toBe(errorTitle);

    expect(element.find('p').first().hasClass(boundaryErrorMessage)).toBe(true);
    expect(element.find('p').first().text())
      .toBe(error.message);

    expect(element.find('p').at(1).hasClass(boundaryErrorFooter)).toBe(true);
    expect(element.find('p').at(1).html())
      .toBe(errorFooter);
  });

  test('should render children when no error is caught', () => {
    const unrenderedElement = (
      <ErrorBoundary>
        <div />
      </ErrorBoundary>
    );

    const error = {
      message: ''
    };

    const info = {
      componentStack: ''
    };

    // When
    const element = shallow(unrenderedElement);
    element.instance().componentDidCatch(error, info);
    element.update();

    // then
    expect(element.children().find('div').first().exists()).toBe(true);
  });
});
