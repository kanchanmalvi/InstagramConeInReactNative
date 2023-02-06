import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomePage from '../screens/HomePage';
import ReelsScreen from '../screens/ReelsScreen';
import SearchScreen from '../screens/SearchScreen';
import PostScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="home"
        component={HomePage}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Ionicons
                  name="home"
                  size={21}
                  color={focused ? '#A770EF' : '#808080'}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{position: 'relative'}}>
                <Ionicons
                  name="search"
                  size={25}
                  color={focused ? '#A770EF' : '#808080'}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{position: 'relative'}}>
                <FontAwesome
                  name="plus-square-o"
                  size={30}
                  color={focused ? '#A770EF' : '#808080'}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{position: 'relative'}}>
                <Ionicons
                  name="heart"
                  size={25}
                  color={focused ? '#A770EF' : '#808080'}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{position: 'relative'}}>
                <Image
                  style={{width: 30, height: 30, borderRadius: 15}}
                  source={require('../../assets/img/users.png')}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
