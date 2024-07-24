import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewsFeed from '../routes/NewsFeed';
import NewsStory from '../routes/NewsStory';
import { StyledMainPage } from './MainPage.styles';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <NewsFeed />,
    },
    {
      path: '/news/:id',
      element: <NewsStory />,
    },
  ],
  { basename: '/hacker-news-clone' },
);

function MainPage() {
  return (
    <StyledMainPage>
      <RouterProvider router={router} />
    </StyledMainPage>
  );
}

export default MainPage;
