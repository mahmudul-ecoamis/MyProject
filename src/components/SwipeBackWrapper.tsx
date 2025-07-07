// components/SwipeBackWrapper.tsx
import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type Props = {
  children: ReactNode;
  swipeDistance?: number;
  swipeVelocity?: number;
};

export default function SwipeBackWrapper({
  children,
  swipeDistance = 120,
  swipeVelocity = 900,
}: Props) {
  const navigation = useNavigation();

  const panGesture = Gesture.Pan()
    .onEnd((event) => {
      const { translationX, velocityX } = event;

      if (translationX > swipeDistance && velocityX > swipeVelocity) {
        navigation.goBack();
      }
    });

  return (
    <GestureDetector gesture={panGesture}>
      <View style={styles.container}>{children}</View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
