import { getCharacters } from './getCharacters';

jest.mock('./fetch-api', () => ({
  asyncFetch: () =>
    new Promise(resolve => {
      resolve({
        characters: [],
        total: 0
      });
    })
}));

describe('getCharacter tests', () => {
  it('returns the result sent by the fetchApi service', async () => {
    const result = await getCharacters();
    expect(result.total).toEqual(0);
    expect(result.characters.length).toEqual(0);
  });
});
