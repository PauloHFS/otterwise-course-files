import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  place-content: center;
`;

const CommentsContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: stretch;
`;

export { StyledHeader, CommentsContainer };
