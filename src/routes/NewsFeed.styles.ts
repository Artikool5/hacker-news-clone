import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FeedItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Index = styled.div`
  min-width: 2ch;
  text-align: end;
  color: #828282;
`;

export const Upvote = styled.img`
  width: 10px;
  height: 10px;

  cursor: pointer;
`;

export const FeedItemDescription = styled.div``;

export const FeedItemConteiner = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StoryHeading = styled.h2``;

export const StoryLink = styled(Link)``;

export const StoryDomain = styled.span`
  color: #828282;
  font-size: 10px;
`;

export const StoryInfo = styled.span`
  color: #828282;
  font-size: 10px;
`;

export const StoryScore = styled.span``;

export const StoryUser = styled.span``;

export const StoryAge = styled.span``;

export const StoryComments = styled.span``;

export const Pagination = styled.div`
  padding-block: 8px 0px;
  padding-inline: 16px;
`;

export const PaginationButton = styled.button`
  padding-block: 4px;
  padding-inline: 12px;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;
