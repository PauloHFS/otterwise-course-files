import axios from 'axios';

export const jsonPlaceholderAPIClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const endpoints = {
  posts: 'posts',
  comments: 'comments',
  albums: 'albums',
  photos: 'photos',
  todos: 'todos	',
  users: 'users',
};
