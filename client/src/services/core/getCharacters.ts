import { asyncFetch } from './fetch-api';

const CHARACTERS_ENDPOINT = 'characters';

export const getCharacters = ({
  start = 0,
  perPage = 20
}: {
  start?: number;
  perPage?: number;
} = {}) => {
  return asyncFetch({
    endpoint: CHARACTERS_ENDPOINT,
    queryParams: {
      perPage,
      start
    }
  });
};
