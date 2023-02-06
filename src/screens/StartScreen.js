import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const StartScreen = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/img/InstagramLogo.png')} />
      </View>
      <View>
        <Image
          source={require('../../assets/img/instalogo.png')}
          style={styles.userImage}
        />
      </View>

      <TouchableOpacity
        style={styles.login}
        onPress={() => Navigation.navigate('login')}>
        <Text style={{textAlign: 'center', color: 'white'}}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>
          Don't have an account ?
          <Text style={{color: '#3797EF'}}> Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  userImage: {
    width: 100,
    height: 100,
    margin: 20,
  },
  login: {
    backgroundColor: '#3797EF',
    padding: 10,
    width: 307,
    height: 44,
    margin: 10,
    borderRadius: 5,
  },
});
