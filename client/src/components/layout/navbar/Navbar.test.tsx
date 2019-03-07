import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('<Navbar /> UI Component', () => {
  it('should render Navbar component', () => {
    const NavbarComp = shallow(<Navbar />);
    const header = NavbarComp.find('header');

    expect(header.length).toBe(1);
    expect(header.childAt(0).type()).toBe('img');
  });
});
