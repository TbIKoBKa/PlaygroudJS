// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState: types.SnacksState = [
    {
        title: '1',
        type:  'info',
        id:    '1',
    },
    {
        title: '1',
        type:  'warn',
        id:    '2',
    },
    {
        title: '1',
        type:  'error',
        id:    '3',
    },
    {
        title: '1',
        type:  'info',
        id:    '4',
    },
    {
        title: '1',
        type:  'success',
        id:    '5',
    },
];

export const snacksSlice = createSlice<types.SnacksState, typeof reducers>({
    name: 'snacks',
    initialState,
    reducers,
});

export const sliceName = snacksSlice.name;
export const snacksActions = snacksSlice.actions;
export default snacksSlice.reducer;
