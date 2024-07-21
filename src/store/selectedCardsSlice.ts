import { createSlice } from '@reduxjs/toolkit';
import { SelectedCardsAction, SelectedCardData } from '../types/types';

type StateType = {
    cards: SelectedCardData[];
};

const initialState: StateType = { cards: [] };

const selectedCardsSlice = createSlice({
    name: 'selectedCards',
    initialState,
    reducers: {
        addCard(state, action: SelectedCardsAction) {
            state.cards.push({
                id: action.payload.id,
                name: action.payload.name,
            });
        },
        removeCard() {},
        unselectAll() {},
    },
});

export const { addCard, removeCard, unselectAll } = selectedCardsSlice.actions;

export default selectedCardsSlice.reducer;
