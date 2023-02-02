import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import Entypo from 'react-native-vector-icons/Entypo';

const InstaHomeSecdPage = () => {
  return (
    <View style={{}}>
      <View style={styles.userName}>
        <View style={styles.ImageName}>
          <Image
            source={require('../../assests/img/signup.png')}
            style={{width: 40, height: 40}}
          />
          <View>
            <Text style={{fontSize: 12, marginLeft: 10}}>kanchan</Text>
            <Text style={{fontSize: 12, marginLeft: 10}}>Bhopal MP, India</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require('../../assests/img/temple.jpg')}
        style={{width: 400, height: 330}}
      />
    </View>
  );
};

export default InstaHomeSecdPage;

const styles = StyleSheet.create({
  userName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  ImageName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
