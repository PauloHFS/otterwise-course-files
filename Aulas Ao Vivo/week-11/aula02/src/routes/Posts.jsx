import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth-context';
import { getPosts } from '../services/posts';

export default function Posts() {
  const [Posts, setPosts] = useState(null);
  const {
    user: { token },
  } = useAuth();

  useEffect(() => {
    const showPosts = async () => {
      const response = await getPosts();

      setPosts(response.data);
    };

    showPosts();
  }, [token]);

  return (
    <main>
      <h1>Posts</h1>
      <div>
        {!!Posts ? (
          Posts.map(({ id, title, body }) => (
            <div key={id}>
              <h2>
                {id} - <Link to={`/posts/${id}`}>{title}</Link>
              </h2>
              <p>{body}</p>
            </div>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </main>
  );
}
