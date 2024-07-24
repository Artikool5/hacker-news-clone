import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Return = styled(Link)`
  padding-block: 4px;
  padding-inline: 12px;
  margin-bottom: 8px;

  display: block;
  width: fit-content;
  &:visited {
    color: #000000;
  }
`;

export const CommentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
`;

export const Button = styled.button`
  padding-block: 4px;
  padding-inline: 12px;
  width: fit-content;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;
