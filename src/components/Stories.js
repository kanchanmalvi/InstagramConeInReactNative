import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import images from '../../images';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const Stories = () => {
  const [img, setImg] = useState([]);

  const Navigation = useNavigation();

  useEffect(() => {
    setImg(images);
  }, []);

  return (
    <View style={styles.imageSection}>
      <FlatList
        data={img}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                Navigation.push('status', {
                  name: item.name,
                  image: item.image,
                })
              }>
              <View style={styles.imageSectionView}>
                {item.id == 1 ? (
                  <View style={styles.yourstory}>
                    <Entypo
                      name="circle-with-plus"
                      style={{
                        fontSize: 20,
                        color: '#405de6',
                        backgroundColor: 'white',
                        borderRadius: 100,
                      }}
                    />
                  </View>
                ) : null}
                <View
                  style={{
                    width: 68,
                    height: 68,
                    backgroundColor: 'white',
                    borderWidth: 1.8,
                    borderRadius: 100,
                    borderColor: '#c13584',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      resizeMode: 'cover',
                      width: '92%',
                      height: '92%',
                      borderRadius: 100,
                      backgroundColor: 'orange',
                    }}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    opacity: item.id == 0 ? 1 : 0.5,
                  }}>
                  {item?.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  imageSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#262626',
    borderWidth: 0.5,
    height: 110,
    paddingVertical: 10,
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
  imageSectionView: {
    flexDirection: 'column',
    paddingHorizontal: 8,
    position: 'relative',
  },
  yourstory: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    zIndex: 1,
  },
});
