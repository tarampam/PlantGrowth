import {configureStore} from "@reduxjs/toolkit";

import createdPlants from './plants';
import userSettings from './settings';

export const store = configureStore({
    reducer: {
        createdPlants: createdPlants,
        userSettings: userSettings,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})