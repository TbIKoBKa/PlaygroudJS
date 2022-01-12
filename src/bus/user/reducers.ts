// Types
import * as types from './types';

// Tools
import { initialState } from './slice';

export const setUser: types.SetUserContract = (__, action) => {
    return action.payload;
};

export const resetUser: types.ResetUserContract = () => {
    return initialState;
};
