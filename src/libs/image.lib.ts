import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

export const getDisplayHeight = (props: GetDisplayHeightProps) => {
  const aspectRatio = props.width / props.height;
  const displayWidth = screenWidth;
  const displayHeight = displayWidth / aspectRatio;

  return displayHeight;
};
export interface GetDisplayHeightProps {
  width: number;
  height: number;
}
