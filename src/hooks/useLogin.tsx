import { useMutation } from '@tanstack/react-query';
import { supabaseClient } from '@/utils/supabase';
import { SignInWithPasswordCredentials } from '@supabase/supabase-js';

export const useLogin = () => {
  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: (params: SignInWithPasswordCredentials) => {
      return supabaseClient.auth.signInWithPassword(params);
    },
  });

  return {
    mutation,
  };
};
