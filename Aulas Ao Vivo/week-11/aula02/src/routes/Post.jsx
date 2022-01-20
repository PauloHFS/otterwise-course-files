import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPostById } from '../services/posts';

export default function Post() {
  const [Post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const showPost = async () => {
      const response = await getPostById(id);
      setPost(response.data);
    };
    showPost();
  }, []);

  return (
    <main>
      <h1>{Post.title}</h1>
      <p>{Post.body}</p>
    </main>
  );
}
