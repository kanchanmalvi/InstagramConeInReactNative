import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './src/NavigationScreens/BottomTabs';
import StartScreen from './src/screens/StartScreen';
import StatusScreen from './src/screens/StatusScreen';
import EditProfile from './src/screens/EditProfile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="welcome"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="status"
          component={StatusScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="editprofile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="home"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
