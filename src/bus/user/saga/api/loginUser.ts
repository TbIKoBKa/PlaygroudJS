// Actions
import * as sagaActions from '../sagaActions';

// Types
import * as types from '../../types';
type LoginContract = (data: ReturnType<typeof sagaActions.loginUserAction>['payload']) => Promise<types.User>

// Tools
import { API_URL } from '../../../../init/constants';
const ROUTE = 'login';

export const loginUser: LoginContract = async(data) => {
    const response = await fetch(`${API_URL}/${ROUTE}`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.status !== 200) {
        throw new Error();
    }

    return response.json();
};
