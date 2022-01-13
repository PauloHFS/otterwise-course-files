const BASE_URL = 'https://jsonplaceholder.typicode.com';

const endpoints = [
  '/posts',
  '/comments',
  '/albums',
  '/photos',
  '/todos',
  '/users',
];

const get = async endpoint => {
  const response = await fetch(BASE_URL + endpoint);
  const data = await response.json();
  return data;
};

const api = {
  endpoints,
  get,
};

export default api;
