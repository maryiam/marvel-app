import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import Characters from './Characters';
import { charactersMock } from './__mocks__/characters.data.mocks';
import Character from '../character/Character';
import { apiCharactersRespMock } from '../../services/core/__mocks__/getCharacters';

describe('<Characters /> UI Component', () => {
  describe('basic behaviour', () => {
    it('should have n child for n characters', () => {
      const CharactersComp = shallow(
        <Characters characters={charactersMock} />
      );
      expect(CharactersComp.find('div.container').children().length).toBe(
        apiCharactersRespMock.total
      );
    });
  });

  describe('First character label', () => {
    let firstCharacterLabel: ShallowWrapper;

    beforeAll(
      () =>
        (firstCharacterLabel = shallow(
          <Characters characters={charactersMock} />
        )
          .find(Character)
          .first()
          .dive()
          .find('label.character-title')
          .first())
    );

    it('should not be defined', () =>
      expect(firstCharacterLabel.length).toBe(1));

    it('should be equal to first character name', () =>
      expect(firstCharacterLabel.text()).toBe(charactersMock[0].name));
  });
});
