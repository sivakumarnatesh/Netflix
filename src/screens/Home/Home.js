/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { View, StyleSheet, BackHandler, Alert } from 'react-native';
import FlatList from "../../components/Flatlist/FlatList";

const HomeScreen = () => {

  useEffect(() => {
    const BackHandling = () => {
      Alert.alert('Exit', 'Are you want exit ?', [
        {
          text: 'cancel',
          onPress: () => null,
        },
        {
          text: 'Ok',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };
    BackHandler.addEventListener('Go Back', BackHandling);
    return () => BackHandler.removeEventListener('hardwareBackPress', BackHandling);
  }, []);

  return (
    <View style={styles.homeContainer}>
      <FlatList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
});
