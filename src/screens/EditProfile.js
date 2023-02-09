import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const EditProfile = () => {
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: 5,
        }}>
        <TouchableOpacity>
          <Text style={{color: '#262626', fontSize: 18}}>Cancel</Text>
        </TouchableOpacity>
        <Text style={{color: 'Black', fontSize: 19, fontWeight: '500'}}>
          Edit Profile
        </Text>
        <TouchableOpacity>
          <Text style={{color: '#3897F0', fontSize: 18}}>Done</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 250,
          marginVertical: 10,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            borderBottomColor: '#F2F2F2',
            borderBottomWidth: 0.8,
          }}>
          <Image
            source={require('../../assets/img/donald.jpg')}
            style={{height: 120, width: 120, borderRadius: 100}}
          />
          <TouchableOpacity>
            <Text style={{color: '#3897F0', margin: 10, fontSize: 18}}>
              Change Profile Photo
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{padding: 10}}>
          <View>
            <Text style={{opacity: 0.5, fontSize: 15}}>Name</Text>
            <TextInput
              placeholder="Type name here..."
              defaultValue="Kanchan Malviya"
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#CDCDCD',
              }}
            />
          </View>

          <View>
            <Text style={{opacity: 0.5, fontSize: 15, marginTop: 5}}>
              Username
            </Text>
            <TextInput
              placeholder="Type name here..."
              defaultValue="Kanchan Malviya"
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#CDCDCD',
              }}
            />
          </View>
          <View>
            <Text style={{opacity: 0.5, fontSize: 15, marginTop: 5}}>Bio</Text>
            <TextInput
              placeholder="Type name here..."
              defaultValue="Kanchan Malviya"
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#CDCDCD',
              }}
            />
          </View>
        </View>

        <View
          style={{
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#CDCDCD',
          }}>
          <TouchableOpacity>
            <Text style={{fontSize: 16, color: 'black', marginLeft: 5}}>
              Add Link
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#CDCDCD',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: '#3897F0',
                marginLeft: 5,
                marginTop: 5,
              }}>
              Swicth to profesional account
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#CDCDCD',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: '#3897F0',
                marginLeft: 5,
                marginTop: 5,
              }}>
              Personal information settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
