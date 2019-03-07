import queryString from 'querystring';

const transformQueryString = (params: any) =>
  params ? `?${queryString.stringify(params)}` : ``;

export const asyncFetch = async ({
  endpoint,
  queryParams,
  body,
  ...config
}: {
  endpoint: string;
  queryParams?: any;
  body?: any;
}) => {
  const url = `/api/${endpoint}${transformQueryString(queryParams)}`;
  const requestConfig = {
    headers: {
      'Content-Type': 'application/json'
    },

    body: body ? JSON.stringify(body) : undefined,
    ...config
  };

  const response = await fetch(url, requestConfig);
  const { status, message, data } = await response.json();

  if (status >= 400) {
    return Promise.reject(message);
  }

  return data;
};
