/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home/Home';
import SettingsScreen from '../Settings/Settings';
import {Image,StyleSheet} from 'react-native';
import Find from '../Find/Find';
import Store from '../Store/Store';
import {HOME_INACTIVE, STORE_INACTIVE, FIND_INACTIVE, SETTINGS_INACTIVE, HOME_ACTIVE, STORE_ACTIVE, FIND_ACTIVE, SETTINGS_ACTIVE } from '../../assets/images';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused
                                ? HOME_ACTIVE
                                : HOME_INACTIVE;
                            break;
                        case 'Store':
                            iconName = focused
                                ? STORE_ACTIVE
                                : STORE_INACTIVE;
                            break;
                        case 'Find':
                            iconName = focused
                                ? FIND_ACTIVE
                                : FIND_INACTIVE;
                            break;
                        case 'Profile':
                            iconName = focused
                                ? SETTINGS_ACTIVE
                                : SETTINGS_INACTIVE;
                            break;
                    }
                    return !focused ? (
                        <Image
                        style={styles.Icons}
                            source={iconName}
                        />
                    ) : (
                            <Image
                             style={styles.Icons}
                                source={iconName}
                            />
                    );
                },
                tabBarStyle: {
                    backgroundColor: 'rgba(34,36,40,1)',
                    width:'100%',
                    borderTopWidth: 0,
                },
            })}
            initialRouteName={HomeScreen}
            tabBarOptions={{
                activeTintColor: 'yellow',
                inactiveTintColor: 'white',
              }}
        >
        <Tab.Screen name="Home" component={HomeScreen} style={styles.tabOptions} />
        <Tab.Screen name="Store" component={Store} />
        <Tab.Screen name="Find" component={Find} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
        </Tab.Navigator>
  );
}

export default MainContainer;

const styles = StyleSheet.create({
    Icons:{
        width:20,
        height:20,
    },
    tabOptions:{
        color:'yellow',
    },
});

