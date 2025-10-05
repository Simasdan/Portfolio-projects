import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/Main/MainLayout';
import MainPage from './pages/MainPage/MainPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import { RoutePath } from './types/routes';
import SalonsPage from './pages/SalonsPage/SalonsPage';

export const router = createBrowserRouter([
    {
      path: RoutePath.ROOT,
      element: <MainLayout />,
      // errorElement: <NotFoundPage />,
      children: [
        {
          path: RoutePath.ROOT,
          element: <MainPage/>
        },
        {
          path: RoutePath.ABOUTUS,
          element: <AboutUsPage/>
        },
        {
          path: RoutePath.CONTACTS,
          element: <ContactsPage/>
        },
        {
          path: RoutePath.SALONS,
          element: <SalonsPage/>
        },
      ]
    },
  ]);