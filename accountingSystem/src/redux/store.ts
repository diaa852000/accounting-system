import  appStateSlice  from './features/appStateSlice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        appState : appStateSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;