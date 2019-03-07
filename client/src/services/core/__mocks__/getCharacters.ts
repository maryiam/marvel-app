import { charactersMock } from '../../../components/characters/__mocks__/characters.data.mocks';

export const apiCharactersRespMock = {
  total: charactersMock.length,
  results: charactersMock
};

export const getCharacters = () => {
  return new Promise(resolve => {
    resolve(apiCharactersRespMock);
  });
};
