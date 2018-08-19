import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from '../App';

describe('App Component: ', () => {
  test('should render', () => {
    const component = shallow(<App />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  test('should render main and styles', () => {
    const mainElement = shallow(<App />).dive().dive();
    expect(shallowToJson(mainElement)).toMatchSnapshot();
  });
});
