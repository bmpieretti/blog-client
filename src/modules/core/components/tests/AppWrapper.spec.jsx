import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppWrapper from '../AppWrapper';

describe('App Component: ', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<AppWrapper />); });

  test('should render wrappers', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
