import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';

export function useHealth() {
  return useQuery({
    queryKey: ['health'],
    queryFn: () => api.getHealth(),
    retry: 1,
    refetchInterval: 30000,
  });
}
