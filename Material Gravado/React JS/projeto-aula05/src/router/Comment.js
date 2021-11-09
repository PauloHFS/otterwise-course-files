import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import {
  CommentPage,
  Name,
  Email,
  CommentBody,
  ButtonContainer,
  StyledButton,
} from './Comment.style';

function Comment() {
  const [comment, setComment] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentResponse = await fetch(
          `https://jsonplaceholder.typicode.com/comments/${id}`
        );
        const comment = await commentResponse.json();
        setComment(comment);
      } catch (error) {
        console.log('Ocorreu um erro ao buscar o comentário');
      }
    };
    fetchData();
  }, [id]);

  const goBack = () => history.push('/');

  if (!comment) return null;

  return (
    <CommentPage>
      <Name>
        <h3>{comment.name}</h3>
      </Name>
      <Email>{comment.email}</Email>
      <CommentBody>{comment.body}</CommentBody>
      <ButtonContainer>
        <StyledButton onClick={goBack} variant="contained">
          Voltar
        </StyledButton>
      </ButtonContainer>
    </CommentPage>
  );
}

export default Comment;
