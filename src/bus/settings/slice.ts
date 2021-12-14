// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState: types.Settings = {
    fontSize: 20,
    tabSize:  4,
};

export const settingsSlice = createSlice<types.Settings, typeof reducers>({
    name: 'settings',
    initialState,
    reducers,
});

export const sliceName = settingsSlice.name;
export const settingsActions = settingsSlice.actions;
export default settingsSlice.reducer;
