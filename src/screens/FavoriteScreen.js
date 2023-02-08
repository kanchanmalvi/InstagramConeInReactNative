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

const FavoriteScreen = () => {
  const [data, setData] = useState([]);

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
      <ScrollView style={{margin: 10}}>
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

        {data.slice(0, 3).map((item, index) => {
          return (
            <View key={index}>
              <View>
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
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
