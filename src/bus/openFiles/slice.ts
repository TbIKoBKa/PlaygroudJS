// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState: types.OpenFilesState = [
    {
        id:       '0',
        fullpath: '/hello.txt',
        content:  'console.log("hello")',
    },
    {
        id:       '1',
        fullpath: '/world.txt',
        content:  'console.log("world")',
    },
    {
        id:       '2',
        fullpath: '/helloworld.txt',
        content:  'console.log("helloworld")',
    },
];

export const openFilesSlice = createSlice<types.OpenFilesState, typeof reducers>({
    name: 'openFiles',
    initialState,
    reducers,
});

export const sliceName = openFilesSlice.name;
export const openFilesActions = openFilesSlice.actions;
export default openFilesSlice.reducer;
