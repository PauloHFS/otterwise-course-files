import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getComments } from '../services/comments';

export default function Home() {
  const [Comments, setComments] = useState(undefined);

  useEffect(() => {
    const setCommentsState = async () => {
      const { response, error } = await getComments();

      if (!error) {
        setComments(response.data);
      } else {
        console.error(error);
      }
    };

    setCommentsState();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h2>Comments</h2>
      {!!Comments ? (
        Comments.map(({ id, name }) => (
          <h4 key={id}>
            <Link to={`/comments/${id}`}>
              {id} - {name}
            </Link>
          </h4>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
