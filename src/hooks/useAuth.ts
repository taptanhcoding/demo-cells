import { LocalStorageKey } from '@/constant';
import useLocalStorage from './useLocalStorage';

const useAuth = () => {
  const [token] = useLocalStorage(LocalStorageKey.access_token, '');

  return !!token;
};
export default useAuth;
