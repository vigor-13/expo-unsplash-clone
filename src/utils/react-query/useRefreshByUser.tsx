import React from 'react';

type Props = () => Promise<unknown>;

export const useRefreshByUser = (refetch: Props) => {
  const [isRefetchByUser, setIsRefetchByUser] = React.useState(false);

  const refetchByUser = async () => {
    setIsRefetchByUser(true);

    try {
      await refetch();
    } finally {
      setIsRefetchByUser(false);
    }
  };

  return {
    isRefetchByUser,
    refetchByUser,
  };
};
