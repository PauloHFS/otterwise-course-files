import {
  jsonPlaceholderAPIClient,
  endpoints,
} from '../provider/jsonPlaceholderAPIClient';

export const getComments = async () => {
  let response = undefined;
  let error = undefined;
  try {
    response = await jsonPlaceholderAPIClient.get(endpoints.comments);
  } catch (e) {
    error = e;
  } finally {
    return { response, error };
  }
};

export const getCommentById = async id => {
  let response = undefined;
  let error = undefined;
  try {
    response = await jsonPlaceholderAPIClient.get(
      `${endpoints.comments}/${id}`
    );
  } catch (e) {
    error = e;
  } finally {
    return { response, error };
  }
};
