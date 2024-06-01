import { useMutation } from '@tanstack/react-query';
import { supabaseClient } from '@/utils/supabase';

export const useLogout = () => {
  const mutation = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => {
      return supabaseClient.auth.signOut();
    },
  });

  return {
    mutation,
  };
};
