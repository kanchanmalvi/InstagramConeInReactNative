import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const SingleReel = ({item, index, currentIndex}) => {
  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isliked);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);

  const onBuffer = buffer => {
    console.log(buffer, 'buffer');
  };
  const onError = error => {
    console.log(error, 'error');
  };
  return (
    <View
      style={{width: windowWidth, height: windowHeight, position: 'relative'}}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          muted={mute}
          source={item.video}
          style={{width: '100%', height: '100%', position: 'absolute'}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="volume-mute"
          style={{
            fontSize: mute ? 20 : 0,
            color: 'white',
            position: 'absolute',
            top: windowHeight / 2.3,
            left: windowWidth / 2.3,
            backgroundColor: 'rgba(52,52,52,0.6)',
            borderRadius: 100,
            padding: mute ? 10 : 0,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          padding: 10,
          width: windowWidth,
          zIndex: 1,
        }}>
        <View style={{}}>
          <TouchableOpacity style={{width: 150}}>
            <View
              style={{width: 100, flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  margin: 10,
                }}>
                <Image
                  source={item.nameimage}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={{color: 'white', fontSize: 14}}>{item.name}</Text>
            </View>
          </TouchableOpacity>

          <Text style={{color: 'white', fontSize: 16, marginHorizontal: 10}}>
            {item.desc}
          </Text>
          <View style={{flexDirection: 'row', padding: 10}}>
            <TouchableOpacity>
              <Ionicons
                name="ios-musical-note"
                style={{color: 'white', fontSize: 16}}
              />
            </TouchableOpacity>
            <Text style={{color: 'white'}}>Original Video</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 60,
          right: 0,
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <TouchableOpacity onPress={() => setLike(!like)} style={{padding: 10}}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{color: like ? 'red' : 'white', fontSize: 25}}
          />
          <Text style={{color: 'white', marginTop: 5}}>{item?.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Ionicons
            name="ios-chatbubble-outline"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Ionicons
            name="paper-plane-outline"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Feather
            name="more-vertical"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <View
          style={{
            borderRadius: 10,
            width: 30,
            height: 30,
            borderWidth: 2,
            margin: 10,
            borderColor: 'white',
          }}>
          <Image
            source={item.nameimage}
            style={{
              borderRadius: 10,
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleReel;

const styles = StyleSheet.create({});
