import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import RootLayout from './layout/root-layout'
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import SearchPage from './pages/search'; 
import MoviesPage from './pages/category'; 
import NowPlayingPage from './pages/nowplaying'; 
import PopularPage from './pages/popular'; 
import TopRatedPage from './pages/toprated'; 
import UpComingPage from './pages/upcoming'; 
import DetailPage from './pages/detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <PopularPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: 'search', element: <SearchPage /> },
      {
        path: 'movies',
        element: <MoviesPage />,
        children: [
          { path: 'now-playing', element: <NowPlayingPage /> },
          { path: 'popular', element: <PopularPage /> },
          { path: 'top-rated', element: <TopRatedPage /> },
          { path: 'up-coming', element: <UpComingPage /> },
          { path: ':movieId', element: <DetailPage /> }
        ],
      },
    ],
    errorElement: <h1>잘못된 경로</h1>
  },
]);

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App;
