import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App Component', () => {
  test('should render with given props', () => {
    // Given
    const id = 'helix-plus-blog';

    // When
    const element = shallow(<App />);

    // then
    expect(element.prop('id')).toEqual(id);
  });
});
