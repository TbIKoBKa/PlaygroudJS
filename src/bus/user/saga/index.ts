// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all } from 'redux-saga/effects';

// Types
import * as sagaActions from './sagaActions';

// Workers
import * as workers from './workers';

export function* watchUser(): SagaIterator {
    yield all([ yield takeEvery(sagaActions.loginUserAction.type, workers.loginUser) ]);
    yield all([ yield takeEvery(sagaActions.registerUserAction.type, workers.registerUser) ]);
}
