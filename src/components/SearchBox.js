import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingVertical: 10,
      }}>
      <Ionicons
        name="search"
        style={{
          fontSize: 18,
          opacity: 0.7,
          position: 'absolute',
          zIndex: 1,
          left: 25,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor={'#909090'}
        style={{
          width: '94%',
          backgroundColor: '#EBEBEB',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 15,
          padding: 5,
          paddingLeft: 40,
        }}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
