import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

export type ColProps = {
  style?: ViewStyle;
  gutter?: number;
  children: React.ReactNode;
};

export const Col = ({ children, gutter, style }: ColProps) => {
  return (
    <View
      style={[
        styles.col,
        { paddingRight: gutter ?? 24, paddingLeft: gutter ?? 24 },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    flex: 1,
  },
});
