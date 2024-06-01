import React from 'react';
import { Image as ExpoImage, ImageProps as ExpoImageProps } from 'expo-image';

export interface ImageProps extends ExpoImageProps {}

export const Image: React.FC<ExpoImageProps> = (props) => {
  // const { style } = props;

  return <ExpoImage {...props} />;
};
