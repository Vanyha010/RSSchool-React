import { createSlice } from '@reduxjs/toolkit';
import { SelectedCardData } from '../types/types';

type StateType = {
    cards: SelectedCardData[];
};

const initialState: StateType = { cards: [] };

const selectedCardsSlice = createSlice({
    name: 'selectedCards',
    initialState,
    reducers: {
        addCard(state, action) {
            state.cards.push({
                id: action.payload.id,
                name: action.payload.name,
            });
        },
        removeCard(state, action) {
            state.cards = state.cards.filter((item) => {
                return item.id !== action.payload.id;
            });
        },
        unselectAll(state) {
            state.cards = [];
        },
    },
});

export const { addCard, removeCard, unselectAll } = selectedCardsSlice.actions;

export default selectedCardsSlice.reducer;
