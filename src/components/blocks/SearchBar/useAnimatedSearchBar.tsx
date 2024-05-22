import React from 'react';
import { Animated } from 'react-native';

export const useAnimatedSearchBar = () => {
  const duration = 300;
  const inputWidth = React.useRef(new Animated.Value(1)).current;
  const buttonTranslateX = React.useRef(new Animated.Value(40)).current;
  const buttonOpacity = React.useRef(new Animated.Value(0)).current;

  const onFocus = () => {
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();

    Animated.timing(inputWidth, {
      toValue: 0.85,
      duration,
      useNativeDriver: false,
    }).start();

    Animated.timing(buttonTranslateX, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const onBlur = () => {
    Animated.timing(buttonOpacity, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();

    Animated.timing(inputWidth, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }).start();

    Animated.timing(buttonTranslateX, {
      toValue: 40,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    inputWidth,
    buttonTranslateX,
    buttonOpacity,
    onBlur,
    onFocus,
  };
};
