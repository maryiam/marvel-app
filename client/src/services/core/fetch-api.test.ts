import { asyncFetch } from './fetch-api';

const successResp = {
  data: {
    characters: [1],
    total: 1
  },
  message: 'success',
  status: 200
};

const errorResp = {
  message: 'oups',
  status: 400
};

describe('fetchApi tests', async () => {
  const setup = (response: { status: number; message: string; data?: any }) => {
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => response
      })
    );
  };

  it('should return the success result sent by the native fetch method', async () => {
    window.fetch = setup(successResp);

    const result = await asyncFetch({
      body: {},
      endpoint: 'characters',
      queryParams: { limit: 5 }
    });

    const { data } = successResp;

    expect(result.total).toEqual(data.total);
    expect(result.characters.length).toEqual(data.characters.length);
  });

  it('should return the error result sent by the native fetch method', async () => {
    window.fetch = setup(errorResp);

    try {
      await asyncFetch({ endpoint: 'error' });
    } catch (e) {
      expect(e).toEqual(errorResp.message);
    }
  });
});
