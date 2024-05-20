import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { LayoutChangeEvent } from 'react-native';

export interface UseBottomSheetProps {
  initialSnapPoints: (string | number)[];
  enableContentFitSnapPoint?: boolean;
}

export const useBottomSheet = (props: UseBottomSheetProps) => {
  const { initialSnapPoints, enableContentFitSnapPoint } = props;
  const ref = React.useRef<BottomSheet>(null);
  const [snapPoints, setSnapPoints] =
    React.useState<(string | number)[]>(initialSnapPoints);

  const handleOpenSheet = () => {
    if (ref.current) ref.current?.expand();
  };

  const handleCloseSheet = () => {
    if (ref) ref.current?.close();
  };

  const getContentHeight = (e: LayoutChangeEvent) => {
    if (!enableContentFitSnapPoint) return;

    const { height } = e.nativeEvent.layout;
    if (height) setSnapPoints([height]);
  };

  return {
    ref,
    snapPoints,
    handleOpenSheet,
    handleCloseSheet,
    getContentHeight,
  };
};
