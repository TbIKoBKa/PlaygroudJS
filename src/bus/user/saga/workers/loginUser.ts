// Actions
import { userActions } from '../../slice';
import * as sagaActions from '../sagaActions';

// Tools
import * as API from '../api';
import { makeRequest } from '../../../../tools/utils';

// Types
import { UserState } from '../../types';

export function* loginUser(action: ReturnType<typeof sagaActions.loginUserAction>) {
    console.log('🚀action', action);

    const result: UserState = yield makeRequest<UserState>({
        fetcher:           API.loginUser,
        succesAction:      userActions.setUser,
        successSideEffect: function* (result) {
            yield console.log('successSideEffect', result);
        },
    });

    if (result !== null) {
        console.log('outsideSuccessSideEffect');
    }
}
