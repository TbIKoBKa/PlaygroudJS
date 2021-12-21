// Types
import * as types from './types';

export const addSnack: types.AddSnackContract = (state, action) => {
    if (state) {
        return [ ...state, action.payload ];
    }

    return [ action.payload ];
};

export const removeSnack: types.RemoveSnackContract = (state, action) => {
    return state?.filter((snack) => snack.id !== action.payload);
};
