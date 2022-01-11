// Core
import { createAction } from '@reduxjs/toolkit';

// Slice
import { sliceName } from '../slice';

export const loginUserAction = createAction<any>(`${sliceName}/LOGIN_USER_ASYNC`);
export const registerUserAction = createAction<any>(`${sliceName}/REGISTER_USER_ASYNC`);
