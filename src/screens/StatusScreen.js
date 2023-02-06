import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const StatusScreen = ({route}) => {
  const {name} = route.params;
  const {image} = route.params;

  return (
    <View
      style={{
        backgroundColor: 'black',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
        animated={true}
      />
      <View
        style={{
          backgroundColor: 'gray',
          height: 3,
          borderWidth: 1,
          borderStartColor: 'gray',
          width: '95%',
          position: 'absolute',
          top: 18,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: '100%',
            width: '50%',
          }}></View>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 12,
          left: 0,
          width: '90%',
        }}>
        <View
          style={{
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              resizeMode: 'cover',
              width: '92%',
              height: '92%',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text style={{color: 'white', fontSize: 15, paddingLeft: 10}}>
            {name}
          </Text>
          <TouchableOpacity>
            <Ionicons
              name="close"
              style={{fontSize: 25, color: 'white', opacity: 0.6}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{position: 'absolute', width: '100%', height: 600}}
      />
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  statustyle: {
    height: 3,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 1,
    width: '95%',
    borderWidth: 1,
    margin: 10,
  },
  statusbartyle: {
    height: '100%',
    width: '50%',
    backgroundColor: 'white',
  },
});
