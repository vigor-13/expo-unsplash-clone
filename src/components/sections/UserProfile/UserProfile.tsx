import React from 'react';
import RN from 'react-native';
import { useAuthStore } from '@/stores';
import { Avatar, Text, tokens } from '@/ui';

export const UserProfile: React.FC = () => {
  const { session } = useAuthStore();
  const user = session?.user;

  return (
    user && (
      <RN.View style={styles.container}>
        <Avatar />
        <RN.View style={styles.textContainer}>
          <Text style={styles.userNameText}>{user.user_metadata.name}</Text>
        </RN.View>
      </RN.View>
    )
  );
};

const styles = RN.StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    padding: tokens.st.space[200],
    minHeight: 160,
    backgroundColor: tokens.st.color.neutral[900],
  },
  textContainer: {
    marginTop: tokens.st.space[250],
  },
  userNameText: {
    fontSize: tokens.st.font.size.xl2,
    fontWeight: tokens.st.font.weight.extrabold as any,
    lineHeight: tokens.st.font.size.xl2,
  },
});
