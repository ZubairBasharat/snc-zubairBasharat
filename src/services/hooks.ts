// hooks/useUsers.ts
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import personsList from '@/services/persons.json';
import { User } from '@/types';

const fetchUserById = async (id: number | string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = personsList.find((i) => i.id == id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error('User not found'));
      }
    }, 2000);
  });
};

const useUser = (id: number | string | null): UseQueryResult<User> => {
  return useQuery<User, Error>({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id as number),
    enabled: !!id,
  });
};

export default useUser;
