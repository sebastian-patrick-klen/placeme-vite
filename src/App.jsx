import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Auth from './pages/Auth';
import Map from './pages/Map';
import UserPlaces from './pages/UserPlaces';
import Users from './pages/Users';
import Error from './pages/Error';
import { placesByUserLoader, placesLoader, usersLoader } from './utils/loaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Users />, loader: usersLoader },
      {
        path: '/user/:id',
        element: <UserPlaces />,
        loader: placesByUserLoader,
      },
      { path: '/auth', element: <Auth /> },
      {
        path: '/map/:id',
        element: <Map />,
        loader: placesLoader,
      },
    ],
  },
]);

function App() {
  console.log(import.meta.env.VITE_API_URL);
  return <RouterProvider router={router} />;
}

export default App;
