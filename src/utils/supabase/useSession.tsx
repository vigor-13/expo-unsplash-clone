import React from 'react';
import { Session } from '@supabase/supabase-js';
import { supabaseClient } from './supabase-client';

interface Props {
  setSession: (data: Session | null) => void;
}

export const useSession = (props: Props) => {
  const { setSession } = props;

  React.useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [setSession]);
};
