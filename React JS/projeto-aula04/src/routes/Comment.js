import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Comment() {
  const [comment, setComment] = useState(null);

  const { commentID } = useParams();

  useEffect(() => {
    const getComment = async () => {
      try {
        const commentResponse = await fetch(
          `https://jsonplaceholder.typicode.com/comments/${commentID}`
        );
        const commentJSON = await commentResponse.json();
        setComment(commentJSON);
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, [commentID]);

  if (!comment) {
    return (
      <>
        <img src="https://i.stack.imgur.com/ATB3o.gif" alt="Loading" />
        <b>Loading...</b>
      </>
    );
  }

  return (
    <div>
      <h2>
        {comment.id} - {comment.name}
      </h2>
      <i>{comment.email}</i>
      <p>{comment.body}</p>
    </div>
  );
}

export default Comment;
