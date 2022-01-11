// Core
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Actions
import * as sagaActions from './saga/sagaActions';

// Types
// import * as types from './types';

export const useUser = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    return {
        user,
        auth: (data: { login: string, password: string }) => {
            dispatch(sagaActions.loginUserAction(data));
        },
        register: (data: { login: string, password: string }) => {
            dispatch(sagaActions.registerUserAction(data));
        },
    };
};
