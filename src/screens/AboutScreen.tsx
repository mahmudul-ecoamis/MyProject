import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
/* import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; */
import SwipeBackWrapper from '../components/SwipeBackWrapper';

export default function AboutScreen() {
  /* const navigation = useNavigation();

  const handleGesture = ({ nativeEvent }: any) => {
    const { state, translationX, velocityX } = nativeEvent;

    // Swipe right far enough and fast enough
    if (
      state === State.END &&
      translationX > 120 &&        // 👈 required horizontal swipe distance
      velocityX > 900            // 👈 optional: require fast swipe (adjust as needed)
    ) {
      navigation.goBack();
    }
  }; */

  return (
    <SwipeBackWrapper>
      <View style={styles.container}>
        <Text style={styles.text}>
          About Screen{'\n'}Swipe from left with enough distance and speed to go back.
        </Text>
      </View>
    </SwipeBackWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
