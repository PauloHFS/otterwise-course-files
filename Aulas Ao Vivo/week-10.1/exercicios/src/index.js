import fs from 'fs';

import {
  getUser,
  getUserPosts,
  getPostComments,
} from './providers/placeholderApi.js';

console.log('-- Iniciando as requisições espere 1 minuto --');

/* Questão 1 */
try {
  fs.writeFileSync('questao1.json', JSON.stringify(await getUserPosts(2)));
  console.log('Questão 1 salva no arquivo JSON');
} catch (error) {
  console.error(error);
}

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

try {
  fs.writeFileSync('questao2.json', JSON.stringify(user_data));
  console.log('Questão 2 salva no arquivo JSON');
} catch (error) {
  console.error(error);
}
