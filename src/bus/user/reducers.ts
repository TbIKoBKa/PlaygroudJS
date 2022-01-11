// Types
import * as types from './types';

export const setUser: types.SetUserContract = (__, action) => {
    return action.payload;
};
