import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NavigationButton from './Navigation-Button';

const hasClasses = (classes: string[], component: ShallowWrapper) =>
  classes.every(c => component.hasClass(c));

describe('<NavigationButton /> UI Component', () => {
  it('should render default values', () => {
    const NavigationButtonComp = shallow(<NavigationButton />);
    const link = NavigationButtonComp.find('a');

    expect(link.length).toBe(1);
    expect(hasClasses(['link', 'uninteractive'], NavigationButtonComp)).toBe(
      true
    );
  });

  it('should has class disabled', () => {
    const NavigationButtonComp = shallow(<NavigationButton disabled={true} />);

    expect(
      hasClasses(['link', 'uninteractive', 'disabled'], NavigationButtonComp)
    ).toBe(true);
  });

  it('should render children', () => {
    const text = "I'm a child";
    const NavigationButtonComp = shallow(
      <NavigationButton>
        <p>{text}</p>
      </NavigationButton>
    );

    const childDOMText = NavigationButtonComp.find('a.link')
      .childAt(0)
      .text();
    expect(childDOMText).toBe(text);
  });

  it('should invoke onClick', () => {
    const _click = jest.fn();

    shallow(<NavigationButton onNavigate={_click} />)
      .find('a.link')
      .simulate('click');

    expect(_click).toBeCalled();
  });
});
