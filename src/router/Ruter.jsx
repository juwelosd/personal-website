import {createBrowserRouter} from 'react-router';

import MainLayout from '../mainLayout/MainLayout';
import Home from '../components/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
export default router;
