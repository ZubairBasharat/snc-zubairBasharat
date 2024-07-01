import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { User } from '@/types';
import { apiUrl } from '@/constant/variables';

const fetchUserById = async (email: string): Promise<User> => {
  try {
    const response = await fetch(`${apiUrl}user?email=${email}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error('User not found');
  }
};

const useUser = (email: string | null): UseQueryResult<User> => {
  return useQuery<User, Error>({
    queryKey: ['user', email],
    queryFn: () => fetchUserById(email as string),
    enabled: !!email,
    retry: 0,
  });
};

export default useUser;
