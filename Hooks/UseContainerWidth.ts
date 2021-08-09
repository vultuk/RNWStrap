import {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';

export const useContainerWidth = (): {
  containerWidth: number | string;
  width: number;
} => {
  // Get a constantly updating window width
  const { width } = useWindowDimensions();

  // Decide the width of the container based on the window width
  const getContainerWidth = (): number | string => {
    if (width >= 1400) return 1399.98;
    if (width >= 1200) return 1198.98;
    if (width >= 992) return 991.98;
    if (width >= 768) return 767.98;

    return 575.98;
  };

  // Set the width of the container in a state
  const [containerWidth, setContainerWidth] = useState<number | string>(
    getContainerWidth()
  );

  // Update the container width when the window width changes
  useEffect(() => {
    setContainerWidth(getContainerWidth());
  }, [width]);

  return { containerWidth, width };
};
