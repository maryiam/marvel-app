import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PageInput from './Page-Input';

const indexToPageString = (index: number) => (index + 1).toString();
const getInputValue = (component: ShallowWrapper) =>
  component.find('input').prop('value');

describe('<PageInput /> UI Component', () => {
  describe('input value', () => {
    let PageInputComp: ShallowWrapper;
    const pageIndex = 10;

    beforeAll(() => {
      PageInputComp = shallow(
        <PageInput page={pageIndex} applyPageChange={() => {}} />
      );
    });

    it('should be set depending page prop as input value', () => {
      expect(getInputValue(PageInputComp)).toBe(indexToPageString(pageIndex));
    });

    it('should be updated when page prop changes', () => {
      expect(getInputValue(PageInputComp)).toBe(indexToPageString(pageIndex));

      const newPage = 3;
      PageInputComp.setProps({ page: newPage });

      expect(getInputValue(PageInputComp)).toBe(indexToPageString(newPage));
    });

    it('should be updated when page prop changes', () => {
      const setStateSpy = jest.spyOn(PageInput.prototype, 'setState');
      const newPage = 3;

      PageInputComp.setProps({ page: newPage });
      expect(setStateSpy).not.toBeCalled();
    });

    it('should be updated when the user input change', () => {
      const input = PageInputComp.find('input');
      input.simulate('change', { target: { value: '20' } });

      expect(getInputValue(PageInputComp)).toBe('20');
    });
  });

  describe('prop applyPageChange call', () => {
    let PageInputComp: ShallowWrapper;
    let input: ShallowWrapper;
    let _applyChange: jest.Mock;
    const pageIndex = 10;

    beforeAll(() => {
      _applyChange = jest.fn();
      PageInputComp = shallow(
        <PageInput page={pageIndex} applyPageChange={_applyChange} />
      );
      input = PageInputComp.find('input');
    });

    afterEach(() => _applyChange.mockClear());

    it('should invoked on Enter onKeyPress', () => {
      input.simulate('keypress', { key: 'Enter' });
      expect(_applyChange).toBeCalled();
    });

    it('should not be invoked onKeyPress when key is different than Enter', () => {
      input.simulate('keypress', { key: 'F' });
      expect(_applyChange).not.toBeCalled();
    });
  });
});
