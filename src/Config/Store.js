/* eslint-disable prettier/prettier */
//store

import { configureStore } from '@reduxjs/toolkit';
import loggedUser from './Reducer';

export default configureStore({
    reducer: {
        login: loggedUser,
    },
});
