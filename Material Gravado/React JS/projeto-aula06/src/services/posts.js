import client from '../provider/jsonplaceholder-api';

export const post = body => client.post('/posts', body);
