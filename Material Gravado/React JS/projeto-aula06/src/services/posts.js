import client from '../providers/jsonplaceholder-api';

export const post = body => client.post('/posts', body);
