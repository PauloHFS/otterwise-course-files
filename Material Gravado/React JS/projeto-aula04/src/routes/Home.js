import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = new useNavigate();

  const [comments, setComments] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      try {
        const commentsResponse = await fetch(
          'https://jsonplaceholder.typicode.com/comments'
        );
        const commentsJSON = await commentsResponse.json();
        console.log(commentsJSON);

        setComments(commentsJSON);
      } catch (error) {
        console.log(error);
      }
    };

    getComments();
  }, []);

  const handleNavigation = id => {
    navigate(`/comments/${id}`);
  };

  if (!comments) {
    return (
      <>
        <img src="https://i.stack.imgur.com/ATB3o.gif" alt="Loading" />
        <b>Loading...</b>
      </>
    );
  }

  return (
    <>
      {comments.map(({ id, name }) => {
        return (
          <div
            key={id}
            onClick={() => {
              handleNavigation(id);
            }}
          >
            <h3>
              {id} - {name}
            </h3>
          </div>
        );
      })}
    </>
  );
}

export default Home;
