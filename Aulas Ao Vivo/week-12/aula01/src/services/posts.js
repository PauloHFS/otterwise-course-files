import { client } from '../provider/jsonPlacholderApi';

export const postPost = post => client.post('/posts', post);
