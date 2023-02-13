import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  TextInput,
  Text,
  Image,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import React, {useState, useEffect} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onsubmit = async data => {
    try {
      let url = 'http://10.0.2.2:5000/login';
      let body = {
        email: data.email,
        password: data.password,
      };
      const res = await axios.post(url, body, null, 'login');
      console.log(res, 'api response');
      Navigation.navigate('home');
    } catch (error) {
      alert('Invalid Credientials');
      console.log(error, 'error');
    }

    reset();
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/img/InstagramLogo.png')} />
      </View>

      <View style={{width: '100%', margin: 10}}>
        <View style={styles.inputStyle}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter User Email"
                errorStyle={{color: 'red'}}
                style={styles.input}
              />
            )}
            name="email"
          />
        </View>
        <View style={{marginHorizontal: 12}}>
          {errors.email && (
            <Text style={{color: 'red'}}>This is required.</Text>
          )}
        </View>

        <View style={styles.inputStyle}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter User Password"
                errorStyle={{color: 'red'}}
                style={styles.input}
                secureTextEntry={true}
              />
            )}
            name="password"
          />
        </View>
        <View style={{marginHorizontal: 12}}>
          {errors.password && (
            <Text style={{color: 'red'}}>This is required.</Text>
          )}
        </View>
        <TouchableOpacity style={{margin: 12}}>
          <Text style={styles.forgotBtn}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.login} onPress={handleSubmit(onsubmit)}>
        <Text style={{textAlign: 'center', color: 'white'}}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>
          Don't have an account ?
          <Text style={{color: '#3797EF'}}> Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  userImage: {
    width: 100,
    height: 100,
    margin: 20,
  },
  login: {
    backgroundColor: '#3797EF',
    padding: 10,
    width: 365,
    height: 44,
    margin: 10,
    borderRadius: 5,
  },
  inputStyle: {
    marginVertical: 5,
    marginHorizontal: 12,
    borderColor: 'darkgray',
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 10,
  },
  forgotBtn: {
    textAlign: 'right',
    color: '#3797EF',
  },
  buttonText: {
    textAlign: 'center',
    color: '#4C64FF',
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198,
  },
});
