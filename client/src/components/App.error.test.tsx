import { shallow } from 'enzyme';
import App from './App';
import React from 'react';

// move the error to another file in order to be able to mock the service with a new factory since jest.mock calls doesn't work inside test or it.
// It works only when the mock is defined at the root level of the file.

jest.mock('../services/core/getCharacters', () => ({
  getCharacters: () =>
    new Promise((resolve, reject) => {
      reject('something went wrong');
    })
}));

describe('render error', () => {
  it('should display error in page', async () => {
    let AppComponent = await shallow(<App />);
    AppComponent.update();
    expect(AppComponent.find('Characters').length).toBeFalsy();
    expect(AppComponent.find('div.error').length).toBe(1);
    expect(AppComponent.find('div.error').text()).toBe('something went wrong');
  });
});
