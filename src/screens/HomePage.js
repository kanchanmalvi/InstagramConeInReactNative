import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import InstaHomeFirstPage from '../components/InstaHomeFirstPage';
import Post from '../../Post';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomePage = () => {
  const [post, setPost] = useState([]);

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
            <View style={{marginVertical: 10}}>
              <View style={styles.userName}>
                <View style={styles.ImageName}>
                  <Image
                    source={item?.nameimage}
                    style={{width: 40, height: 40, borderRadius: 20}}
                  />
                  <View>
                    <Text style={{fontSize: 12, marginLeft: 10}}>
                      {item?.profileName}
                    </Text>
                    <Text style={{fontSize: 12, marginLeft: 10}}>
                      {item?.place}
                    </Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity>
                    <Entypo name="dots-three-horizontal" size={25} />
                  </TouchableOpacity>
                </View>
              </View>
              <Image
                source={item?.postimage}
                style={{width: 400, height: 330}}
              />

              <View style={{margin: 10}}>
                <View style={styles.iconNameStyle}>
                  <View style={styles.iconStyle}>
                    <TouchableOpacity style={{margin: 5}}>
                      <AntDesign
                        name="hearto"
                        size={25}
                        style={{color: 'red'}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin: 5}}>
                      <EvilIcons
                        name="comment"
                        size={35}
                        style={{color: 'black'}}
                      />
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
                  <Image
                    source={item?.likeimage}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 10,
                      borderRadius: 10,
                    }}
                  />
                  <Text>{item.likes}</Text>
                </View>
                <Text style={{lineHeight: 20}}>{item.comment}</Text>
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
    margin: 10,
  },
  ImageName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle: {
    flexDirection: 'row',
  },
  iconNameStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
