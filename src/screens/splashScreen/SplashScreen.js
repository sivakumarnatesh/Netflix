/* eslint-disable prettier/prettier */
import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {SPLASH_SCREEN_LOGO} from '../../assets/images';

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  return (
    <View style={styles.mainView}>
      <Image source={SPLASH_SCREEN_LOGO} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
export default SplashScreen;
