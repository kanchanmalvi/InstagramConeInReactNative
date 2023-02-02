import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import StartScreen from './src/screens/StartScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/screens/InstaHome/HomePage';
import Test from './src/screens/Test';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="homepage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="test"
          component={Test}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
