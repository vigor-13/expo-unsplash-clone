import { QueryClientProvider as RawQueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client';

export interface QueryClientProviderProps {
  children: React.ReactNode;
}

export const QueryClientProvider: React.FC<QueryClientProviderProps> = (
  props,
) => {
  const { children } = props;
  return (
    <RawQueryClientProvider client={queryClient}>
      {children}
    </RawQueryClientProvider>
  );
};
