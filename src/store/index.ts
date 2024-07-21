import { configureStore } from '@reduxjs/toolkit';
import selectedCardsReducer from './selectedCardsSlice';

export default configureStore({
    reducer: {
        selectedCards: selectedCardsReducer,
    },
});
