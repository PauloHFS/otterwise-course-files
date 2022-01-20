import client from '../providers/client';

export const getPosts = () => client.get('/posts');

export const getPostById = id => client.get(`/posts/${id}`);
