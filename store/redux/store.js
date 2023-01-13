import {configureStore} from "@reduxjs/toolkit";

import createdPlants from './plants'

export const store = configureStore({
    reducer: {
        createdPlants: createdPlants
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})