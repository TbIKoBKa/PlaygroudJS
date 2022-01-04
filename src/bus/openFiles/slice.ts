// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = null;

export const openFilesSlice = createSlice<types.OpenFilesState, typeof reducers>({
    name: 'openFiles',
    initialState,
    reducers,
});

export const sliceName = openFilesSlice.name;
export const openFilesActions = openFilesSlice.actions;
export default openFilesSlice.reducer;
