import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const InstaHomeThirdLikesPage = () => {
  return (
    <View style={{width: 375, height: 147, margin: 10}}>
      <View style={styles.iconNameStyle}>
        <View style={styles.iconStyle}>
          <TouchableOpacity style={{margin: 5}}>
            <AntDesign name="hearto" size={25} style={{color: 'red'}} />
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 5}}>
            <EvilIcons name="comment" size={35} style={{color: 'black'}} />
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 5}}>
            <Feather name="send" size={25} style={{color: 'black'}} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{margin: 5}}>
            <FontAwesome name="bookmark-o" size={28} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Likes and Comment Section */}
      <View style={styles.iconStyle}>
        <View>
          <Image
            source={require('../../assests/img/signup.png')}
            style={{width: 20, height: 20, marginHorizontal: 10}}
          />
        </View>
        <Text>Liked by kanchan and 55,789 others</Text>
      </View>
      <View style={{marginHorizontal: 10}}>
        <Text style={{lineHeight: 20}}>
          Liked by kanchan and others liked by kanchan and others liked by
          kanchan
        </Text>
      </View>
    </View>
  );
};

export default InstaHomeThirdLikesPage;

const styles = StyleSheet.create({
  iconStyle: {
    flexDirection: 'row',
  },
  iconNameStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
