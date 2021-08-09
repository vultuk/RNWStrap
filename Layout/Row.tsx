import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

import {useContainerWidth} from '../Hooks/UseContainerWidth';

export type RowProps = {
  style?: ViewStyle;
  children?: React.ReactNode;
};

export const Row = ({ children, style }: RowProps) => {
  const { width } = useContainerWidth();

  return (
    <View
      style={[
        styles.row,
        { flexDirection: width >= 768 ? 'row' : 'column' },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flex: 1 },
});
