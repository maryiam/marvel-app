import { shallow, ShallowWrapper } from 'enzyme';
import Character from './Character';
import * as React from 'react';
import { defaultThumbnail, defaultTitle } from './defaultValue';
import { Thumbnail } from '../characters';
import {
  avatarMock,
  characterNameMock
} from './__mocks__/character.data.mocks';

const getImgSrc = ({ path, extension }: Thumbnail) => `${path}.${extension}`;

const getImgSrcFromDOM = (component: ShallowWrapper) =>
  component.find('img.character-image').prop('src');

const getTitleFromDOM = (component: ShallowWrapper) =>
  component.find('label.character-title').text();

describe('<Character /> UI Component', () => {
  it('renders default character', () => {
    const CharacterComp = shallow(<Character />);
    expect(getImgSrcFromDOM(CharacterComp)).toBe(getImgSrc(defaultThumbnail));
    expect(getTitleFromDOM(CharacterComp)).toBe(defaultTitle);
  });

  it('renders passed character', () => {
    const avatarSrc = `${avatarMock.path}.${avatarMock.extension}`;
    const CharacterComp = shallow(
      <Character name={characterNameMock} thumbnail={avatarMock} />
    );

    expect(getImgSrcFromDOM(CharacterComp)).toBe(avatarSrc);

    expect(getTitleFromDOM(CharacterComp)).toBe(characterNameMock);
  });
});
