import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

import {useContainerWidth} from '../Hooks/useContainerWidth';

export type ContainerProps = {
  style?: ViewStyle;
  innerStyle?: ViewStyle;
  fluid?: boolean;
  children?: React.ReactNode;
};

export const Container = ({
  children,
  fluid,
  style,
  innerStyle,
}: ContainerProps) => {
  const { containerWidth } = useContainerWidth();

  return (
    <View style={[styles.central, style]}>
      <View
        style={[
          styles.container,
          { width: fluid === true ? '100%' : containerWidth },
          innerStyle,
        ]}
      >
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  central: { alignItems: 'center' },
  container: {},
});
