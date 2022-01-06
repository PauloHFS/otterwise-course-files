import fetch from 'node-fetch';

const API_URL = 'https://jsonplaceholder.typicode.com';

const data = async route => {
  try {
    const response = await fetch(API_URL + route);
    const data = response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const getUser = userId => data(`/users/${userId}`);

const getUserPosts = userId => data(`/posts?userId=${userId}`);

const getPostComments = postId => data(`/posts/${postId}/comments`);

export { API_URL, getUser, getUserPosts, getPostComments };
