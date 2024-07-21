import { configureStore } from '@reduxjs/toolkit';
import selectedCardsReducer from './selectedCardsSlice';

const store = configureStore({
    reducer: {
        selectedCards: selectedCardsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
