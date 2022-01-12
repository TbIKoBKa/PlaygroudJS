// Core
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';
import { useTogglersRedux } from '../client/togglers';

// Actions
import * as sagaActions from './saga/sagaActions';
import { userActions } from './slice';

// Types
// import * as types from './types';

export const useUser = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);
    const { setTogglerAction } = useTogglersRedux();

    return {
        user,
        auth: (data: { login: string, password: string }) => {
            dispatch(sagaActions.loginUserAction(data));
        },
        register: (data: { login: string, password: string }) => {
            dispatch(sagaActions.registerUserAction(data));
        },
        logout: () => {
            dispatch(userActions.resetUser());
            setTogglerAction({ type: 'isLoggedIn', value: false });
        },
    };
};
