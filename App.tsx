import React, { useCallback } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import logo from './src/images/logo.png';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import SettingsScreen from './src/screens/SettingsScreen';

export type RootStackParamList = {
  Home: undefined;
  About: { userName: string; userId: string };
  Settings: { userName: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HeaderLeft = () => (
  <Image
    source={logo}
    style={{ width: 100, height: 36, marginLeft:-5 }}
    resizeMode="contain"
  />
);

const HeaderRight = ({
  navigation,
}: {
  navigation: any; // you can type this better if you want
}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Settings', { userName: 'DefaultUser' })}
    style={{ marginRight: 15 }}
  >
    <Icon name="menu" size={24} color="black" />
  </TouchableOpacity>
);

function App() {
  // useCallback to memoize headerLeft so it's stable between renders
  const renderHeaderLeft = useCallback(() => <HeaderLeft />, []);

  // useCallback that returns a function, memoized only once
  const renderHeaderRight = useCallback(
    (navigation: any) => () => <HeaderRight navigation={navigation} />,
    []
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation }) => ({
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerTitle: '',
            headerLeft: renderHeaderLeft,
            headerRight: renderHeaderRight(navigation),
            headerBackVisible: true,
            
            headerBackTitle: 'Back',
            
          })}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
export default App;
