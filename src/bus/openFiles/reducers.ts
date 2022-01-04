// Types
import * as types from './types';

export const setOpenFiles: types.SetOpenFilesContract = (__, action) => {
    return action.payload;
};

export const addOpenFile: types.AddOpenFileContract = (state, action) => {
    if (state) {
        return [ ...state, action.payload ];
    }

    return [ action.payload ];
};

export const removeOpenFile: types.RemoveOpenFileContract = (state, action) => {
    return state?.filter((file) => file.fullpath !== action.payload.fullpath);
};
