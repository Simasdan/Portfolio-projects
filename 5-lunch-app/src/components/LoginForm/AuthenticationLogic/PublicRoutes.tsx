import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';
import { RoutePath } from '../../../types/navigationEnums';

interface PublicRoutesProps {
  element: JSX.Element;
}

function PublicRoutes({ element }: PublicRoutesProps) {
  const token = useAuth();

  return token ? <Navigate to={RoutePath.MENU} /> : element;
}

export default PublicRoutes;
