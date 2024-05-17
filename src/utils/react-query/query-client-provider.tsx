import {
  QueryClient,
  QueryClientProvider as RawQueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

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
