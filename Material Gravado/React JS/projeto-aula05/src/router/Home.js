import { useState, useEffect } from 'react';

import { CommentCard } from '../components/CommentCard/CommentCard';

import { StyledHeader, CommentsContainer } from './Home.style';

function Home() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentsResponse = await fetch(
          'https://jsonplaceholder.typicode.com/comments'
        );
        const comments = await commentsResponse.json();
        setComments(comments);
        console.log(comments);
      } catch (error) {
        console.log('Ocorreu um erro ao buscar os comentários');
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <StyledHeader>
        <h1>Listagem de Comentários</h1>
      </StyledHeader>

      <CommentsContainer>
        {comments.map(({ id, name, body }) => (
          <CommentCard id={id} name={name} body={body} />
        ))}
      </CommentsContainer>
    </>
  );
}

export default Home;
