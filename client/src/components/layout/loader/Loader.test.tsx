import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Loader from './Loader';

const getDOMFirstChild = (component: ShallowWrapper) =>
  component.find('div.wrapper').childAt(0);

describe('<Loader /> UI Component', () => {
  it('should render children if no processing prop is passed (default as false)', () => {
    const title = 'some title';
    const LoaderComp = shallow(
      <Loader>
        <h1>{title}</h1>
      </Loader>
    );

    expect(getDOMFirstChild(LoaderComp).text()).toBe(title);
  });

  it('should render the loader image if no processing is false', () => {
    const title = 'some title';
    const LoaderComp = shallow(
      <Loader processing={false}>
        <h1>{title}</h1>
      </Loader>
    );

    expect(getDOMFirstChild(LoaderComp).text()).toBe(title);
  });

  describe('processing Loader behaviour', () => {
    let firstDOMChild: ShallowWrapper;
    let LoaderComp: ShallowWrapper;
    const title = 'some title';

    beforeAll(() => {
      LoaderComp = shallow(
        <Loader processing={true}>
          <h1>{title}</h1>
        </Loader>
      );

      firstDOMChild = getDOMFirstChild(LoaderComp);
    });

    it('should render the loader image under processing', () => {
      expect(firstDOMChild.type()).toBe('img');
    });

    it('should render children prop after processing ends', () => {
      expect(firstDOMChild.type()).toBe('img');
      LoaderComp.setProps({ processing: false });
      expect(getDOMFirstChild(LoaderComp).text()).toBe(title);
    });
  });
});
