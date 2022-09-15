/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Image, View, Text } from "react-native";
// import { connect } from 'react-redux';
import { LOGIN_LOGO } from "../../assets/images";
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../../Config/Reducer';

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loginStatus = useSelector(state => state.login.isLoggedIn);

  useEffect(() => {
    navigateToDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);

  const userName = (val) => {
    setUsername(val);
  };

  const passWord = (val) => {
    setPassword(val);
  };

  const authenticate = () => {
    dispatch(checkAuth({ username, password }));
  };

  const navigateToDashboard = () => {
    if (loginStatus) {
      setUsername('');
      setPassword('');
      props.navigation.navigate('Dashboard');
    }
  };

  return (
    <SafeAreaView style={styles.Credentials}>
      <View style={styles.imageContainer}>
        <Image source={LOGIN_LOGO} style={styles.loginLogo} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(val) => userName(val)}
        value={username}
        placeholder="username"
        placeholderTextColor="#FFF"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val) => passWord(val)}
        value={password}
        placeholder="password"
        placeholderTextColor="#FFF"
      />
      <TouchableOpacity style={styles.loginBtn} onPress={() => authenticate()}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '50%',
  },
  loginLogo: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 15,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: 'white',
    color: 'white',
  },
  Credentials: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  loginBtn: {
    backgroundColor: 'red',
    borderRadius: 10,
    margin: 12,
    marginTop: 30,
    height: 50,
  },
  loginText: {
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
// const mapStateToProps = state => {
//   return {
//       credentials: state
//   };
// };

export default Login;
