import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Auth from './pages/Auth';
import Map from './pages/Map';
import UserPlaces from './pages/UserPlaces';
import Users from './pages/Users';
import Error from './pages/Error';
import Place from './pages/Place';
import {
  placeById,
  placesByUserLoader,
  placesLoader,
  usersLoader,
} from './utils/loaders';
import EditPlace from './pages/EditPlace';
import NewPlace from './pages/NewPlace';

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
      {
        path: '/user/:id/new',
        element: <NewPlace />,
      },
      {
        path: '/place/:id',
        element: <Place />,
        loader: placeById,
      },
      {
        path: '/place/:id/edit',
        element: <EditPlace />,
        loader: placeById,
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
  return <RouterProvider router={router} />;
}

export default App;
