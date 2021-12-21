// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState: types.FileSystemState = {
    activePath: '/',
    fs:         [],
};

export const filesystemSlice = createSlice<types.FileSystemState, typeof reducers>({
    name: 'filesystem',
    initialState,
    reducers,
});

export const sliceName = filesystemSlice.name;
export const filesystemActions = filesystemSlice.actions;
export default filesystemSlice.reducer;
