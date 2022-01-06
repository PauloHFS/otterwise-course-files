import {
  getUser,
  getUserPosts,
  getPostComments,
} from './provider/placeholderApi.js';

/* Questão 1 */
console.log(await getUserPosts(2));

/* Questão 2 */

const user_info = await getUser(1);

const posts = await getUserPosts(1);

const posts_and_comments = await Promise.all(
  posts.map(async post => ({
    ...post,
    comments: await getPostComments(post.id),
  }))
);

const user_data = { ...user_info, posts: posts_and_comments };

console.dir(user_data);
