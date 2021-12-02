// Types
import * as types from './types';

export const setFontSize: types.SetFontSizeContract = (state, action) => {
    if (state) {
        state.fontSize = action.payload;
    }

    return state;
};
