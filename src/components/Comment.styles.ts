import styled from 'styled-components';

export const StyledComment = styled.div<{ $indentLevel: number }>`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-left: ${({ $indentLevel }) => `${$indentLevel * 32}px`};
`;

export const CommentInfo = styled.div`
  display: flex;
  gap: 4px;

  color: #828282;
  font-size: 10px;
`;

export const CommentToggle = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
`;

export const CommentContent = styled.div``;
