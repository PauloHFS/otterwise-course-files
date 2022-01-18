import {
  jsonPlaceholderAPIClient,
  endpoints,
} from '../provider/jsonPlaceholderAPIClient';

export const getPosts = async () => {
  let response = undefined;
  let error = undefined;
  try {
    response = await jsonPlaceholderAPIClient.get(endpoints.posts);
  } catch (e) {
    error = e;
  } finally {
    return { response, error };
  }
};
