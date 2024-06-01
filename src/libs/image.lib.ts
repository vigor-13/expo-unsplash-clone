import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const getDisplayHeight = (props: GetDisplayHeightProps) => {
  const { width, height, cols = 1 } = props;
  const aspectRatio = width / height;
  let displayWidth = screenWidth;
  if (cols > 1) displayWidth = screenWidth / cols;
  const displayHeight = displayWidth / aspectRatio;

  return displayHeight;
};
export interface GetDisplayHeightProps {
  width: number;
  height: number;
  cols?: number;
}

export const getHeightByScreenRatio = (ratio: number) => {
  const result = screenHeight * ratio;
  return result;
};

export const calculateImageSize = ({
  containerWidth,
  count,
  gap = 10,
}: {
  count: number;
  containerWidth: number;
  gap?: number;
}) => {
  const totalGap = (count - 1) * gap;
  const availableWidth = containerWidth - totalGap;
  let imageSize = availableWidth / count;
  return { width: imageSize, height: imageSize };
};
