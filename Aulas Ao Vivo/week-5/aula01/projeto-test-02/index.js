// Crie um projeto novo e instale a biblioteca node-fetch.
import fetch from 'node-fetch';

const API_URL = 'https://jsonplaceholder.typicode.com';

try {
  // 1. Consuma a lista de posts através do endpoint /posts.
  const response = await fetch(`${API_URL}/posts`, {
    method: 'get',
  });

  if (response.status === 200) {
    const body = await response.json();
    // 2. Agora que você tem a lista de posts, consulte o primeiro post da lista.
    console.table(body[0]);
  }
} catch (error) {
  console.log(error);
}

// 3. Cadastre um novo post enviando um objeto com os atributos title e body para o endpoint /posts.
try {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'post',
    body: JSON.stringify({
      title: 'Consumindo uma API com a Otterwise!',
      body: 'Este post foi feito em uma aula da otterwise',
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status === 201) {
    const body = await response.json();
    console.table(body);
  }
} catch (error) {
  console.error(error);
}

// 4. Faça a edição de um post enviando novos atributos title e body para o post com id 1.
const id = 1;

try {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'put',
    body: JSON.stringify({
      title: 'Editando um post na API com a Otterwise!',
      body: 'Este post foi editado em uma aula da otterwise',
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status === 200) {
    const body = await response.json();
    console.table(body);
  }
} catch (error) {
  console.error(error);
}

// 5. Faça a exclusão do primeiro post vindo da listagem de posts.
try {
  const responseGet = await fetch(`${API_URL}/posts`);

  if (responseGet.status === 200) {
    const posts = await responseGet.json();

    const responseDelete = await fetch(`${API_URL}/posts/${posts[0].id}`, {
      method: 'delete',
    });

    if (responseDelete.status === 200) {
      console.log(`O post com id: ${posts[0].id} foi deletado!`);
    }
  }
} catch (error) {
  console.error(error);
}
