import { createBrowserRouter } from 'react-router-dom';
import FoodMenuPage from './pages/FoodMenuPage/FoodMenuPage';
import AvailableLunchPage from './pages/AvailableLunchPage/AvailableLunchPage';
import YourOrdersPage from './pages/YourOrdersPage/YourOrdersPage';
import RatingsPage from './pages/RatingsPage/RatingsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { RoutePath } from './types/navigationEnums';
import AuthLayout from './layouts/Auth/AuthLayout';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import PrivateRoutes from './components/LoginForm/AuthenticationLogic/PrivateRoutes';
import PublicRoutes from './components/LoginForm/AuthenticationLogic/PublicRoutes';
import MainLayout from './layouts/Main/MainLayout';

export const router = createBrowserRouter([
  {
    path: RoutePath.ROOT,
    element: <PrivateRoutes element={<MainLayout />} />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: RoutePath.MENU,
        element: <PrivateRoutes element={<FoodMenuPage />} />,
      },
      {
        path: RoutePath.LUNCH,
        element: <PrivateRoutes element={<AvailableLunchPage />} />,
      },
      {
        path: RoutePath.ORDERS,
        element: <PrivateRoutes element={<YourOrdersPage />} />,
      },
      {
        path: RoutePath.RATINGS,
        element: <PrivateRoutes element={<RatingsPage />} />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: RoutePath.LOGIN,
        element: <PublicRoutes element={<LoginForm />} />,
      },
      {
        path: RoutePath.REGISTER,
        element: <PublicRoutes element={<RegisterForm />} />,
      },
    ],
  },
]);
