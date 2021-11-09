import styled from 'styled-components';

import { Button } from '@material-ui/core';

const CommentPage = styled.main`
  padding: 5vh 20vw;
`;

const Name = styled.div`
  display: flex;
  place-content: center;
`;

const Email = styled.h4`
  padding: 2vh 0;
`;

const CommentBody = styled.p``;

const ButtonContainer = styled.div`
  padding: 5vh 1vw;
  display: flex;
  place-content: center;
`;

const StyledButton = styled(Button)`
  width: 250px;
`;

export { CommentPage, Name, Email, CommentBody, ButtonContainer, StyledButton };
