// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState: types.SnacksState = null;

export const snacksSlice = createSlice<types.SnacksState, typeof reducers>({
    name: 'snacks',
    initialState,
    reducers,
});

export const sliceName = snacksSlice.name;
export const snacksActions = snacksSlice.actions;
export default snacksSlice.reducer;
