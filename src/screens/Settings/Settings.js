/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Config/Reducer';

const SettingsScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const loginStatus = useSelector(state => state.login.isLoggedIn);

  useEffect(() => {
    if (!loginStatus) {
      navigation.navigate('Login');
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.settings}>
      <TouchableOpacity onPress={() => { logOut() }} style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SettingsScreen;

const styles = StyleSheet.create({
  settings: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  logoutBtn: {
    backgroundColor: 'red',
    borderRadius: 10,
    margin: 12,
    marginTop: 30,
    height: 50,
  },
  logoutText: {
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
