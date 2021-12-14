// Types
import * as types from './types';

export const setFontSize: types.SetFontSizeContract = (state, action) => {
    state.fontSize = action.payload;
};

export const setTabSize: types.SetTabSizeContract = (state, action) => {
    state.tabSize = action.payload;
};
