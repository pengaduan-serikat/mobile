import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { scale } from '../utils/scaling';

const LoginForm = ({
  loginForm,
  NIK,
  email,
  password,
  onChangeInput,
  authSend,
  konfirmasiPass
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.inputBox}
      underlineColorAndroid="rgba(0,0,0,0)"
      placeholder="NIK"
      placeholderTextColor="#ffffff"
      selectionColor="#fff"
      keyboardType="email-address"
      value={NIK}
      onChangeText={text => onChangeInput(text, 'NIK')}
    />
    {
      loginForm ? (
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry
          autoCapitalize={'none'}
          placeholderTextColor="#ffffff"
          value={password}
          onChangeText={text => onChangeInput(text, 'password')}
        />
      ) : (
        <View>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Email"
            autoCapitalize={'none'}
            placeholderTextColor="#ffffff"
            value={email}
            onChangeText={text => onChangeInput(text, 'email')}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            secureTextEntry
            autoCapitalize={'none'}
            placeholderTextColor="#ffffff"
            value={password}
            onChangeText={text => onChangeInput(text, 'password')}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Konfirmasi Password"
            secureTextEntry
            autoCapitalize={'none'}
            placeholderTextColor="#ffffff"
            value={konfirmasiPass}
            onChangeText={text => onChangeInput(text, 'konfirmasiPass')}
          />
        </View>
      )
    }
    <TouchableOpacity
      style={styles.button}
      onPress={authSend}
    >
      <Text style={styles.buttonText}>{loginForm ? 'Login' : 'Register'}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(30),
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }

});

export default LoginForm;
