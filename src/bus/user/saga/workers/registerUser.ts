// Core
import { put } from 'redux-saga/effects';

// Actions
import { togglerCreatorAction } from '../../../client/togglers';
import { userActions } from '../../slice';
import * as sagaActions from '../sagaActions';

// Tools
import * as API from '../api';
import { makeRequest } from '../../../../tools/utils';

// Types
import { UserState } from '../../types';

export function* registerUser(action: ReturnType<typeof sagaActions.registerUserAction>) {
    // console.log('🚀action', action);

    const result: UserState = yield makeRequest<UserState>({
        fetcher:           () => API.registerUser(action.payload),
        succesAction:      userActions.setUser,
        successSideEffect: function* () {
            yield put(togglerCreatorAction({ type: 'isLoggedIn', value: true }));
        },
    });

    if (result !== null) {
        // console.log('outsideSuccessSideEffect');
    }
}
