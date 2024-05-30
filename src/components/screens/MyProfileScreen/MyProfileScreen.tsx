import React from 'react';
import RN from 'react-native';
import { HeaderTextButton } from '@/components/blocks/HeaderTextButton';
import { Header } from '@/components/sections/headers/Header';
import { useHeader, useLogout } from '@/hooks';
import { tokens } from '@/ui';
import { useAuthStore } from '@/stores';

export const MyProfileScreen: React.FC = () => {
  const { session } = useAuthStore((state) => state);
  const { mutation } = useLogout();

  const handleLogout = () => {
    mutation.mutate();
  };

  useHeader({
    header: () => (
      <Header
        containerStyle={{
          padding: tokens.st.space[200],
        }}
        headerLeft={() => (
          <HeaderTextButton text="로그아웃" onPress={handleLogout} />
        )}
        headerRight={() => (
          <HeaderTextButton
            text="설정"
            onPress={() => alert('준비중입니다.')}
          />
        )}
        title={session?.user.user_metadata.name}
      />
    ),
  });

  // TODO:
  if (mutation.isError) return;

  return <RN.View></RN.View>;
};
