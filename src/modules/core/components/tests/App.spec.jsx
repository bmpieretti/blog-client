import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { App } from '../App';

describe('App Component: ', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<App />); });

  test('should render wrappers', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
