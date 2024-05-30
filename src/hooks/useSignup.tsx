import { useMutation } from '@tanstack/react-query';
import { supabaseClient } from '@/utils';
import { SignUpWithPasswordCredentials } from '@supabase/supabase-js';

export const useSignup = () => {
  const mutation = useMutation({
    mutationKey: ['signup'],
    mutationFn: (formData: SignUpWithPasswordCredentials) => {
      return supabaseClient.auth.signUp(formData);
    },
  });

  return {
    mutation,
  };
};
