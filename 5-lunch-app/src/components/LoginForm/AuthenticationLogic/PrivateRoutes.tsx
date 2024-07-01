import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';
import { RoutePath } from '../../../types/navigationEnums';

interface PrivateRoutesProps {
  element: JSX.Element;
}

function PrivateRoutes({ element }: PrivateRoutesProps) {
  const token = useAuth();

  return token ? element : <Navigate to={RoutePath.LOGIN} />;
}

export default PrivateRoutes;
