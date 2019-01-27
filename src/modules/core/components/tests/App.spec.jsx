import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('App Component: ', () => {
  const component = mount(<App />);

  afterAll(() => {
    component.unmount()
  })

  test('should render', () => {
    expect(component.find('main').length).toBe(1);
  });
});
