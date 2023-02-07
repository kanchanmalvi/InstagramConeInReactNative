import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import InstaHomeFirstPage from '../components/InstaHomeFirstPage';
import Post from '../../Post';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const HomePage = () => {
  const [post, setPost] = useState([]);
  const [state, setState] = useState(post.isLiked);

  useEffect(() => {
    setPost(Post);
  }, []);

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <InstaHomeFirstPage />

      <FlatList
        data={post}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View
              style={{
                paddingBottom: 10,
                borderBottomColor: 'gray',
                borderBottomWidth: 0.1,
              }}>
              <View style={styles.userName}>
                <View style={styles.ImageName}>
                  <Image
                    source={item?.nameimage}
                    style={{width: 40, height: 40, borderRadius: 100}}
                  />
                  <View style={{paddingLeft: 5}}>
                    <Text style={{fontSize: 12, marginLeft: 10}}>
                      {item?.profileName}
                    </Text>
                    <Text style={{fontSize: 12, marginLeft: 10}}>
                      {item?.place}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Feather name="more-vertical" style={{fontSize: 20}} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item?.postimage}
                  style={{width: '100%', height: 350}}
                />
              </View>

              <View style={styles.iconNameStyle}>
                <View style={styles.iconStyle}>
                  <TouchableOpacity onPress={() => setState(!state)}>
                    <AntDesign
                      name={state ? 'heart' : 'hearto'}
                      size={25}
                      style={{
                        paddingRight: 10,
                        fontSize: 22,
                        color: state ? 'red' : 'black',
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/img/comm.png')}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/img/share.png')}
                      style={{
                        width: 23,
                        height: 21,
                        marginTop: 2,
                        marginLeft: 8,
                      }}
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity>
                  <Image
                    source={require('../../assets/img/bookMark.png')}
                    style={{
                      width: 21,
                      height: 21,
                    }}
                  />
                </TouchableOpacity>
              </View>

              {/* Likes and Comment Section */}

              <View style={styles.iconStyleView}>
                <Text>
                  {state ? 'you and ' : ''}
                  {state ? item.likes + 1 : item.likes}
                </Text>
                <Text
                  style={{
                    lineHeight: 20,
                    fontWeight: '700',
                    fontSize: 14,
                    paddingVertical: 2,
                  }}>
                  {item.comment}
                </Text>
                <Text style={{opacity: 0.4, paddingVertical: 2}}>
                  View all comments
                </Text>
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={item.nameimage}
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 100,
                        backgroundColor: 'orange',
                        marginRight: 10,
                      }}
                    />
                    <TextInput
                      placeholder="Add a comment"
                      style={{opacity: 0.5}}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  userName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  ImageName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    flexDirection: 'row',
  },
  iconNameStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  iconStyleView: {
    marginHorizontal: 10,
  },
});
