// Actions
import * as sagaActions from '../sagaActions';

// Types
import * as types from '../../types';
type LoginContract = (data: ReturnType<typeof sagaActions.loginUserAction>['payload']) => Promise<types.User>

// Tools
import { API_URL } from '../../../../init/constants';
const ROUTE = 'users/login';

export const loginUser: LoginContract = async(data) => {
    const url = new URL(`${API_URL}/${ROUTE}`);

    url.search = new URLSearchParams(data).toString();

    const response = await fetch(url.toString(), {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error();
    }

    return response.json();
};
