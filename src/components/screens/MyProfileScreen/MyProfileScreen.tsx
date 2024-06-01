import React from 'react';
import RN from 'react-native';
import { useHeader, useLogout } from '@/hooks';
import { tokens } from '@/ui';
import { useAuthStore, useMyStore } from '@/stores';
import { HeaderTextButton } from '@/components/blocks/HeaderTextButton';
import { Header } from '@/components/sections/headers/Header';
import { UserProfile } from '@/components/sections/UserProfile';
import { PhotoList } from '@/components/blocks/PhotoList';

export const MyProfileScreen: React.FC = () => {
  const { session } = useAuthStore((state) => state);
  const { mutation } = useLogout();
  const { likesPhoto } = useMyStore((state) => state);

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

  return (
    <RN.View style={styles.container}>
      <RN.ScrollView>
        <UserProfile />
        <PhotoList data={Object.values(likesPhoto)} />
      </RN.ScrollView>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    padding: tokens.st.space[200],
    backgroundColor: tokens.st.color.neutral[900],
  },
});
