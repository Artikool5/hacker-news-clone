import React from 'react';
import styled from 'styled-components';
import useFeedStore from '../store/feedStore';

const StyledMainPage = styled.main`
  padding-block: 8px;
  padding-inline: 8px;
  background-color: #f6f6ef;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FeedItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Index = styled.div`
  color: #828282;
`;

const Upvote = styled.img`
  width: 10px;
  height: 10px;

  cursor: pointer;
`;

const FeedItemDescription = styled.div``;

const FeedItemConteiner = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StoryHeading = styled.h2``;

const StoryDomain = styled.span`
  color: #828282;
  font-size: 10px;
`;

const StoryInfo = styled.span`
  color: #828282;
  font-size: 10px;
`;

const StoryScore = styled.span``;

const StoryUser = styled.span``;

const StoryAge = styled.span``;

const StoryComments = styled.span``;

function MainPage() {
  const feed = useFeedStore((state) => state.visibleFeed);

  return (
    <StyledMainPage>
      <Feed>
        {feed.map((story, i) => {
          return (
            <FeedItem key={story.id}>
              <Index>{i + 1}</Index>
              <Upvote src="https://news.ycombinator.com/triangle.svg" />
              <FeedItemDescription>
                <FeedItemConteiner>
                  <StoryHeading>
                    <a href={story.url}>{story.title}</a>
                  </StoryHeading>
                  <StoryDomain>
                    (<a href={story.url}>{story.domain}</a>)
                  </StoryDomain>
                </FeedItemConteiner>
                <FeedItemConteiner>
                  <StoryInfo>
                    <StoryScore>{story.points}</StoryScore> points by <StoryUser>{story.user}</StoryUser>{' '}
                    <StoryAge>{story.time_ago}</StoryAge> | <StoryComments>{story.comments_count}</StoryComments>{' '}
                    comments
                  </StoryInfo>
                </FeedItemConteiner>
              </FeedItemDescription>
            </FeedItem>
          );
        })}
      </Feed>
    </StyledMainPage>
  );
}

export default MainPage;
