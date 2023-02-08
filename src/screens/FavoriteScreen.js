import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {friendsProfileData} from '../../Videos';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FavoriteScreen = () => {
  const [data, setData] = useState([]);
  const [follows, setFollows] = useState(data.isLiked);
  const [close, setClose] = useState(false);

  useEffect(() => {
    setData(friendsProfileData);
  }, []);

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          borderBottomWidth: 0.5,
          borderBottomColor: '#DEDEDE',
          padding: 10,
          margin: 10,
        }}>
        Activity
      </Text>
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <Text style={{fontWeight: 'bold'}}> This Week</Text>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          {data.slice(0, 3).map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
          <Text>Started following you</Text>
        </View>
        <Text style={{fontWeight: 'bold'}}>Earlier</Text>

        {data.slice(3, 6).map((item, index) => {
          return (
            <View key={index} style={{width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 20,
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '64%',
                  }}>
                  <Image
                    source={item.profileImage}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 100,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{fontSize: 15}}>
                    <Text style={{fontWeight: 'bold'}}>{item.name}</Text> , who
                    might you know is on Instagram
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFollows(!follows)}
                  style={{
                    width: follows ? 72 : 68,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      backgroundColor: follows ? null : '#3493D9',
                      alignItems: 'center',
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: follows ? 1 : 0,
                      borderColor: follows ? '#DEDEDE' : null,
                      height: 30,
                    }}>
                    <Text style={{color: follows ? 'black' : 'white'}}>
                      {follows ? 'Following' : 'Follow'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>
          Suggesetions for you
        </Text>
        {data.map((item, index) => {
          return (
            <View key={index}>
              {close ? null : (
                <View
                  style={{
                    paddingVertical: 10,
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '64%',
                      }}>
                      <Image
                        source={item.profileImage}
                        style={{
                          width: 45,
                          height: 45,
                          borderRadius: 100,
                          marginRight: 10,
                        }}
                      />
                      <View style={{width: '100%'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                          {item.name}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          {item.accountName}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          Sugggested for you
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {follows ? (
                      <TouchableOpacity
                        onPress={() => setFollows(!follows)}
                        style={{
                          width: follows ? 90 : 68,
                        }}>
                        <View
                          style={{
                            width: '100%',
                            height: 30,
                            borderRadius: 5,
                            backgroundColor: follows ? null : '#3493D9',
                            borderWidth: follows ? 1 : 0,
                            borderColor: '#DEDEDE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{color: follows ? 'black' : 'white'}}>
                            {follows ? 'following' : 'follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <>
                        <TouchableOpacity
                          onPress={() => setFollows(!follows)}
                          style={{
                            width: follows ? 90 : 68,
                          }}>
                          <View
                            style={{
                              width: '100%',
                              height: 30,
                              borderRadius: 5,
                              backgroundColor: follows ? null : '#3493D9',
                              borderWidth: follows ? 1 : 0,
                              borderColor: '#DEDEDE',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={{color: follows ? 'black' : 'white'}}>
                              {follows ? 'following' : 'follow'}
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingHorizontal: 10}}>
                          <AntDesign
                            name="close"
                            style={{fontSize: 14, color: 'black', opacity: 0.8}}
                          />
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
