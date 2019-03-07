import React from 'react';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';
import { charactersMock } from './characters/__mocks__/characters.data.mocks';
import Pagination from './layout/pagination/Pagination';
import { apiCharactersRespMock } from '../services/core/__mocks__/getCharacters';
import { MAX_ITEM_PER_PAGE } from '../services/constants/const';
import { CharacterStructure } from './characters';
import { AppState } from './index';

jest.mock('../services/core/getCharacters');

describe('<App /> UI Component', () => {
  describe('App render', () => {
    let AppComponent: ShallowWrapper;

    beforeEach(() => (AppComponent = shallow(<App />)));
    afterEach(() => AppComponent.unmount());

    it('should render without crashing', () => {
      expect(AppComponent.hasClass('App')).toBeTruthy();
      expect(AppComponent.find('div.content')).toBeTruthy();
    });

    it('should fetch characters from mock and render them on mount', async () => {
      const AppComponent = await shallow(<App />);

      expect(AppComponent.find('Loader').prop('processing')).toEqual(false);
      expect(AppComponent.find('div.error').length).toBeFalsy();
      expect(AppComponent.find('Characters').prop('characters')).toEqual(
        charactersMock
      );
    });
  });

  describe('interaction with pagination', () => {
    it('should be update current page when navigation changes', async () => {
      let AppComponent: ShallowWrapper<{}, AppState> = await shallow(<App />);
      const lastPageIndex =
        Math.ceil(apiCharactersRespMock.total / MAX_ITEM_PER_PAGE) - 1;

      AppComponent.find(Pagination)
        .dive()
        .find('div.pagination')
        .childAt(4) // last page button
        .prop('onNavigate')();

      expect(AppComponent.state('currentPage')).toEqual(lastPageIndex);
      setTimeout(() => {
        expect(AppComponent.state('characters')[0].id).toEqual(
          charactersMock[charactersMock.length - 1].id
        );
      }, 0);
    });
  });
});
