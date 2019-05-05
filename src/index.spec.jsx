import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppWrapper from './modules/core/components/AppWrapper';

jest.mock('react-dom', () => ({
  render: jest.fn()
}));

describe('Index: ', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call ReactDOM.render on DOMContentLoaded', () => {
    const { addEventListener, getElementById } = document;
    Object.defineProperty(document, 'addEventListener', {
      value: jest.fn((eventName, callback) => callback()),
      writable: true
    });

    Object.defineProperty(document, 'getElementById', {
      value: jest.fn(),
      writable: true
    });

    // eslint-disable-next-line global-require
    require('./index');

    const addEventListenerStub = document.addEventListener.mock;
    const getElementByIdStub = document.getElementById.mock;
    const renderStub = ReactDOM.render.mock;

    expect(addEventListenerStub.calls[0][0]).toBe('DOMContentLoaded');
    expect(getElementByIdStub.calls[0][0]).toBe('root');
    expect(renderStub.calls[0][0].type === AppContainer).toBeTruthy();
    expect(renderStub.calls[0][0].props.children.type === AppWrapper).toBeTruthy();

    document.addEventListener = addEventListener;
    document.getElementById = getElementById;
  });
});
