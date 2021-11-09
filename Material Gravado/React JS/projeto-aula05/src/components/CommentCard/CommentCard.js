import { Link } from 'react-router-dom';

import { CardContent } from '@material-ui/core';

import { StyledCard } from './CommentCard.style';

function CommentCard({ id, name, body }) {
  return (
    <StyledCard key={id}>
      <CardContent>
        <Link to={`/comments/${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{body}</p>
      </CardContent>
    </StyledCard>
  );
}

export { CommentCard };
