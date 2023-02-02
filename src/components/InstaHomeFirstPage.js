import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../images.js';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InstaHomeFirstPage = () => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    setImg(images);
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.logoSection}>
        <TouchableOpacity>
          <Feather name="camera" size={25} />
        </TouchableOpacity>
        <Image
          source={require('../../assests/img/InstagramLogo.png')}
          style={{width: 120, height: 35}}
        />
        <View style={styles.logo}>
          <TouchableOpacity style={{margin: 10}}>
            <MaterialIcons name="live-tv" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 10}}>
            <Feather name="send" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageSection}>
        <View>
          <FlatList
            data={img}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => {
              console.log(item);
              return (
                <View style={{}}>
                  <LinearGradient
                    colors={['#FBAA47', '#D91A46', '#A60F93']}
                    start={{x: 0.0, y: 1.0}}
                    end={{x: 1.0, y: 1.0}}
                    style={styles.grediant}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={item?.image}
                        style={{width: 55, height: 55, borderRadius: 30}}
                      />
                    </View>
                  </LinearGradient>

                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    {item?.name}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default InstaHomeFirstPage;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', height: '100%'},
  imageSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'darkgray',
    borderWidth: 1,
    height: 105,
  },
  logoSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  grediant: {
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    alignItems: 'center',
    display: 'flex',
    margin: 5,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
