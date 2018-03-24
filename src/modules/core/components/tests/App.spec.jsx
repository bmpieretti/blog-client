import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App Component', () => {
  test('should render', () => {
    // Given
    const className = 'helixPlusClient';

    // When
    const element = shallow(<App />);

    // then
    expect(element.prop('className')).toEqual(className);
  });
});
