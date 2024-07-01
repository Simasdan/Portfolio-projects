import { SessionStorageKeys } from '../../../types/sessionStorageEnums';

function useAuth() {
  const token = sessionStorage.getItem(SessionStorageKeys.TOKEN);
  if (token) {
    return JSON.parse(token);
  }

  return undefined;
}

export default useAuth;
