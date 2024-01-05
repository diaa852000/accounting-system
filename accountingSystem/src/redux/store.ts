import  authSlice  from './features/authSlice';
import  appStateSlice  from './features/appStateSlice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        appState : appStateSlice,
        authState : authSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;