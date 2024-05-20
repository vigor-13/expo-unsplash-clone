import React from 'react';
import { StyleSheet } from 'react-native';
import RawBottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { tokens } from '../../themes';

export interface BottomSheetProps {
  children: React.ReactNode;
  snapPoints: (string | number)[];
}

export const BottomSheet = React.forwardRef<RawBottomSheet, BottomSheetProps>(
  (props, ref) => {
    const { children, snapPoints } = props;

    return (
      <RawBottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={styles.bg}
        handleComponent={() => null}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            pressBehavior="close"
          />
        )}
      >
        <BottomSheetView>{children}</BottomSheetView>
      </RawBottomSheet>
    );
  },
);
BottomSheet.displayName = 'BottomSheet';

const styles = StyleSheet.create({
  bg: {
    backgroundColor: tokens.st.color.black,
  },
});
