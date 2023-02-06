import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Stories from '../components/Stories';

const InstaHomeFirstPage = () => {
  return (
    <View>
      <View style={styles.logoSection}>
        <TouchableOpacity>
          <Feather name="camera" size={25} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Lobster-Regular',
            fontSize: 30,
            fontWeight: '500',
            color: 'black',
          }}>
          Instagram
        </Text>
        <View style={styles.logo}>
          <TouchableOpacity style={{margin: 10}}>
            <MaterialIcons name="live-tv" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 10}}>
            <Feather name="send" size={25} />
          </TouchableOpacity>
        </View>
      </View>

      {/* stories image section */}
      <Stories />
    </View>
  );
};

export default InstaHomeFirstPage;

const styles = StyleSheet.create({
  logoSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
