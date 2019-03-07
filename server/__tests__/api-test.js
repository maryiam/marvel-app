const request = require('supertest');
const app = require('../src/app');

describe('Test the characters api', () => {
  it('It should take query params into account ', () => {
    const start = 2;
    const perPage = 3;
    const firstCharacterInListId = 1009148;

    return request(app)
      .get('/api/characters')
      .query({ start, perPage })
      .expect(200)
      .then(res => {
        const results = res.body.data.results;

        expect(results.length).toBe(perPage);
        expect(results[0]).toEqual(
          expect.objectContaining({ id: firstCharacterInListId })
        );
      });
  });

  it('It should send characters with default query params if none are provided', () => {
    const defaultCharactersLimit = 20;
    const firstCharacterInListId = 1011334;

    return request(app)
      .get('/api/characters')
      .expect(200)
      .then(res => {
        const results = res.body.data.results;

        expect(results.length).toBe(defaultCharactersLimit);
        expect(results[0]).toEqual(
          expect.objectContaining({ id: firstCharacterInListId })
        );
      });
  });

  it('It should send 409 error if the provided query string are invalid', () => {
    const perPage = -1;

    return request(app)
      .get('/api/characters')
      .query({ perPage })
      .expect(409)
      .then(res => {
        const message = res.body.message;
        expect(message).toBe('You must pass an integer limit greater than 0.');
      });
  });
});

describe('Test a 404', () => {
  it('It should respond with 404 status', () => {
    return request(app)
      .get('/api/nowhere')
      .expect('Content-Type', /json/)
      .expect(404);
  });
});
