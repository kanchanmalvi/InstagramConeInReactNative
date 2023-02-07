import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const StatusScreen = ({route}) => {
  const Navigation = useNavigation();
  const {name} = route.params;
  const {image} = route.params;
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    let timer = setTimeout(() => {
      Navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.statusFirstView}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
        animated={true}
      />
      <View style={styles.statusSecondView}>
        <Animated.View
          style={{
            backgroundColor: 'white',
            height: '100%',
            width: progressAnimation,
          }}></Animated.View>
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
          <TouchableOpacity onPress={() => Navigation.goBack()}>
            <Ionicons
              name="close"
              style={{fontSize: 25, color: 'white', opacity: 0.6}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{position: 'absolute', width: '100%', height: 500}}
      />
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: 10,

          width: '100%',
        }}>
        <TextInput
          placeholder="Send message"
          placeholderTextColor={'white'}
          style={{
            borderColor: 'white',
            borderRadius: 25,
            width: '70%',
            height: 50,
            paddingLeft: 20,
            borderWidth: 1,
            fontSize: 20,
            color: 'white',
          }}
        />
        <TouchableOpacity>
          <Feather name="heart" style={{fontSize: 30, color: 'white'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.goBack()}>
          <Feather name="send" style={{fontSize: 30, color: 'white'}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  statusFirstView: {
    backgroundColor: 'black',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusSecondView: {
    backgroundColor: 'gray',
    height: 3,
    borderWidth: 1,
    borderStartColor: 'gray',
    width: '95%',
    position: 'absolute',
    top: 18,
  },
});
