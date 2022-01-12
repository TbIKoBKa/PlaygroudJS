// Core
import { put } from 'redux-saga/effects';

// Actions
import { userActions } from '../../slice';
import * as sagaActions from '../sagaActions';
import { togglerCreatorAction } from '../../../client/togglers';

// Tools
import * as API from '../api';
import { makeRequest } from '../../../../tools/utils';

// Types
import { UserState } from '../../types';

export function* loginUser(action: ReturnType<typeof sagaActions.loginUserAction>) {
    console.log('🚀action', action);

    const result: UserState = yield makeRequest<UserState>({
        fetcher:           () => API.loginUser(action.payload),
        succesAction:      userActions.setUser,
        successSideEffect: function* () {
            yield put(togglerCreatorAction({ type: 'isLoggedIn', value: true }));
        },
    });

    if (result !== null) {
        console.log('outsideSuccessSideEffect');
    }
}
