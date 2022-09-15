/* eslint-disable prettier/prettier */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import Store from './src/Config/Store';

const MainApp = () => (
        <Provider store={Store}>
                <App />
        </Provider>
);
AppRegistry.registerComponent(appName, () => MainApp);
