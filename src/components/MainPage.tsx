import { StyledMainPage } from './MainPage.styles';
import NewsFeed from '../routes/NewsFeed';
import NewsStory from '../routes/NewsStory';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NewsFeed />,
  },
  {
    path: '/news/:id',
    element: <NewsStory />,
  },
]);

function MainPage() {
  return (
    <StyledMainPage>
      <RouterProvider router={router} />
    </StyledMainPage>
  );
}

export default MainPage;
