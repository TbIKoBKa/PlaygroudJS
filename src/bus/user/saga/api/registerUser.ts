// Actions
import * as sagaActions from '../sagaActions';

// Types
import * as types from '../../types';
type RegisterContract = (data: ReturnType<typeof sagaActions.registerUserAction>['payload']) => Promise<types.User>

// Tools
import { API_URL } from '../../../../init/constants';
const ROUTE = 'register';

export const registerUser: RegisterContract = async (data) => {
    const response = await fetch(`${API_URL}/${ROUTE}`, {
        method:  'POST',
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
