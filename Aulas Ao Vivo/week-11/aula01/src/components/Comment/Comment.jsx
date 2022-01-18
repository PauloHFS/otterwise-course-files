import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getCommentById } from '../../services/comments';

export default function Comment() {
  let { id } = useParams();

  const [Comment, setComment] = useState(undefined);

  useEffect(() => {
    const setCommentInfo = async () => {
      const { response, error } = await getCommentById(id);
      if (!error) {
        setComment(response.data);
      } else {
        console.error(error);
      }
    };
    setCommentInfo();
  }, [id]);

  return (
    <div>
      <Link to="/">Go to Home</Link>
      {!!Comment ? (
        <div>
          <h1>{Comment.name}</h1>
          <p>{Comment.body}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
