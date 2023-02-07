import {
  FlatList,
  ScrollView,
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
import Fontisto from 'react-native-vector-icons/Fontisto';
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
                        fontSize: 20,
                        color: state ? 'red' : 'black',
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Fontisto
                      name="comment"
                      style={{fontSize: 20, paddingRight: 10}}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Feather name="send" style={{fontSize: 20}} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity>
                  <Feather name="bookmark" style={{fontSize: 20}} />
                </TouchableOpacity>
              </View>

              {/* Likes and Comment Section */}

              <View style={styles.iconStyle}>
                <Text>
                  {state ? 'you and ' : ''}
                  {state ? item.likes + 1 : item.likes}
                </Text>
              </View>
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
});
