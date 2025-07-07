import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'; // ✅ Use Ionicons from CLI package

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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          headerTitle: '', // hides default title
          headerLeft: () => (
            <Image
              source={logo}
              style={{ width: 36, height: 36, marginLeft: 10 }}
              resizeMode="contain"
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Settings', { userName: 'DefaultUser' })
              }
              style={{ marginRight: 15 }}
            >
              <Icon name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerBackVisible: true,
          headerBackTitle: 'Back',
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
