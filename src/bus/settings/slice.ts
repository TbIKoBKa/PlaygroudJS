// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = {
    fontSize: 20,
};

export const settingsSlice = createSlice<types.SettingsState, typeof reducers>({
    name: 'settings',
    initialState,
    reducers,
});

export const sliceName = settingsSlice.name;
export const settingsActions = settingsSlice.actions;
export default settingsSlice.reducer;
